import { EChartsOption, ResizeOpts } from 'echarts';
import { ECharts, init } from 'echarts/core';
import { ECBasicOption } from 'echarts/types/dist/shared';
import { Observable } from 'iterable-observer';
import { debounce } from 'lodash';
import { CustomElement, parseDOM } from 'web-utility';

import { ProxyElement } from '../Proxy';
import { ZRElementEventHandler, ZRElementEventName } from '../utility';

export type EChartsElementEventHandler = Partial<
    Record<`on${Capitalize<ZRElementEventName>}`, ZRElementEventHandler>
>;
export interface EChartsElementProps
    extends ECBasicOption,
        EChartsElementEventHandler {
    theme?: Parameters<typeof init>[1];
    initOptions?: Omit<Parameters<typeof init>[2], 'renderer'>;
    resizeOptions?: ResizeOpts;
}

export type EChartsElementState = EChartsElementProps & EChartsOption;

export abstract class EChartsElement
    extends ProxyElement<EChartsElementState>
    implements CustomElement
{
    #core?: ECharts;
    #eventHandlers: [ZRElementEventName, ZRElementEventHandler, string?][] = [];
    #eventData = [];

    get renderer() {
        const [_, type] = this.tagName.toLowerCase().split('-');

        return type;
    }

    get options() {
        return this.#core.getOption();
    }

    constructor() {
        super();

        this.attachShadow({ mode: 'open' }).append(
            parseDOM('<div style="height: 100%" />')[0]
        );
        this.#boot();
    }

    connectedCallback() {
        this.style.display = 'block';

        this.#init();

        globalThis.addEventListener?.('resize', this.handleResize);
    }

    disconnectedCallback() {
        globalThis.removeEventListener?.('resize', this.handleResize);

        this.#core?.dispose();
    }

    async #init() {
        var { theme, initOptions, ...props } = this.toJSON();

        this.#core = init(
            this.shadowRoot.firstElementChild as HTMLDivElement,
            theme,
            { ...initOptions, renderer: this.renderer }
        );
        this.setOption({ grid: {}, ...props });

        for (const [event, handler, selector] of this.#eventHandlers)
            if (selector) this.onChild(event, selector, handler);
            else
                this.addEventListener(
                    event,
                    handler as unknown as EventListener
                );
        this.#eventHandlers.length = 0;

        for (const option of this.#eventData) this.setOption(option);

        this.#eventData.length = 0;
    }

    async #boot() {
        for await (const { detail } of Observable.fromEvent<CustomEvent>(
            this,
            'optionchange'
        ))
            this.setOption(detail);
    }

    async setOption(data: EChartsOption) {
        if (!this.#core) {
            this.#eventData.push(data);
            return;
        }
        this.#core.setOption(data, false, true);
    }

    setProperty(key: string, value: any) {
        super.setProperty(key, value);

        this.setOption(this.toJSON());
    }

    addEventListener(event: string, handler: EventListener) {
        if (event === 'optionchange')
            return super.addEventListener(event, handler);

        if (this.#core) this.#core.getZr().on(event, handler);
        else
            this.#eventHandlers.push([
                event as ZRElementEventName,
                handler as unknown as ZRElementEventHandler
            ]);
    }

    onChild(
        event: ZRElementEventName,
        selector: string,
        handler: ZRElementEventHandler
    ) {
        if (this.#core) this.#core.on(event, selector, handler);
        else this.#eventHandlers.push([event, handler, selector]);
    }

    removeEventListener(event: string, handler: EventListener) {
        if (event === 'optionchange')
            return super.removeEventListener(event, handler);

        if (this.#core) this.#core.getZr().off(event, handler);
        else {
            const index = this.#eventHandlers.findIndex(
                item =>
                    item[0] === event &&
                    item[1] === (handler as unknown as ZRElementEventHandler) &&
                    !item[2]
            );
            if (index > -1) this.#eventHandlers.splice(index, 1);
        }
    }

    offChild(
        event: ZRElementEventName,
        selector: string,
        handler: ZRElementEventHandler
    ) {
        if (this.#core) this.#core.off(event, handler);
        else {
            const index = this.#eventHandlers.findIndex(
                item =>
                    item[0] === event &&
                    item[1] === handler &&
                    item[2] === selector
            );
            if (index > -1) this.#eventHandlers.splice(index, 1);
        }
    }

    handleResize = debounce(() =>
        this.#core.resize(this.toJSON().resizeOptions)
    );
}
