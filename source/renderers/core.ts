import { EChartsOption, ResizeOpts } from 'echarts';
import { ECharts, init } from 'echarts/core';
import { ECBasicOption } from 'echarts/types/dist/shared';
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
    core?: ECharts;
    #coreDefer = Promise.withResolvers<void>();

    get ready() {
        return this.#coreDefer.promise;
    }

    #eventHandlers: [ZRElementEventName, ZRElementEventHandler][] = [];
    #eventData = [];

    get renderer() {
        const [_, type] = this.tagName.toLowerCase().split('-');

        return type;
    }

    get options() {
        return this.core.getOption();
    }

    constructor() {
        super();

        this.attachShadow({ mode: 'open' }).append(
            parseDOM('<div style="height: 100%" />')[0]
        );
    }

    connectedCallback() {
        this.style.display = 'block';

        this.#init();

        globalThis.addEventListener?.('resize', this.handleResize);
    }

    disconnectedCallback() {
        globalThis.removeEventListener?.('resize', this.handleResize);

        this.core?.dispose();
    }

    async #init() {
        var { theme, initOptions, ...props } = this.toJSON();

        this.core = init(
            this.shadowRoot.firstElementChild as HTMLDivElement,
            theme,
            { ...initOptions, renderer: this.renderer }
        );
        this.setOption({ grid: {}, ...props });

        this.#coreDefer.resolve();

        for (const [event, handler] of this.#eventHandlers)
            this.addEventListener(event, handler as unknown as EventListener);

        this.#eventHandlers.length = 0;

        for (const option of this.#eventData) this.setOption(option);

        this.#eventData.length = 0;
    }

    async setOption(data: EChartsOption) {
        if (!this.core) {
            this.#eventData.push(data);
            return;
        }
        this.core.setOption(data, false, true);
    }

    setProperty(key: string, value: any) {
        super.setProperty(key, value);

        this.setOption(this.toJSON());
    }

    addEventListener(event: string, handler: EventListener) {
        if (event === 'optionchange')
            return super.addEventListener(event, handler);

        if (this.core) this.core.getZr().on(event, handler);
        else
            this.#eventHandlers.push([
                event as ZRElementEventName,
                handler as unknown as ZRElementEventHandler
            ]);
    }

    removeEventListener(event: string, handler: EventListener) {
        if (event === 'optionchange')
            return super.removeEventListener(event, handler);

        if (this.core) this.core.getZr().off(event, handler);
        else {
            const index = this.#eventHandlers.findIndex(
                item =>
                    item[0] === event &&
                    item[1] === (handler as unknown as ZRElementEventHandler)
            );
            if (index > -1) this.#eventHandlers.splice(index, 1);
        }
    }

    handleResize = debounce(() =>
        this.core.resize(this.toJSON().resizeOptions)
    );
}
