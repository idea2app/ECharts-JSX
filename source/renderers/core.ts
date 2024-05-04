import { EChartsOption, ResizeOpts } from 'echarts';
import { ECharts, init } from 'echarts/core';
import { ECBasicOption } from 'echarts/types/dist/shared';
import { debounce } from 'lodash';
import { CustomElement, parseDOM } from 'web-utility';

import { ProxyElement } from '../Proxy';
import {
    ZRElementEventHandler,
    ZRElementEventName,
    callBus,
    unwrapEventHandler,
    wrapEventHandler
} from '../utility';

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
        this.setOption.start();
        this.removeEventListener.start();
        this.addEventListener.start();
    }

    connectedCallback() {
        super.connectedCallback();

        this.style.display = 'block';

        this.#init();

        globalThis.addEventListener?.('resize', this.handleResize);
    }

    disconnectedCallback() {
        globalThis.removeEventListener?.('resize', this.handleResize);

        this.core?.dispose();
    }

    #init() {
        var { theme, initOptions, ...props } = this.toJSON();

        this.core = init(
            this.shadowRoot.firstElementChild as HTMLDivElement,
            theme,
            { ...initOptions, renderer: this.renderer }
        );
        this.#coreDefer.resolve();

        this.setOption({ grid: {}, ...props });
        this.setOption.run();
        this.removeEventListener.run();
        this.addEventListener.run();
    }

    setOption = callBus((data: EChartsOption) =>
        this.core.setOption(data, false, true)
    );

    setProperty(key: string, value: any) {
        super.setProperty(key, value);

        this.setOption(this.toJSON());
    }

    addEventListener = callBus((name: string, handler: EventListener) => {
        this.core
            .getZr()
            .on(
                name as ZRElementEventName,
                wrapEventHandler.call(this, name, handler)
            );
    });

    removeEventListener = callBus((event: string, handler: EventListener) => {
        this.core.getZr().off(event, unwrapEventHandler(handler));
    });

    handleResize = debounce(() =>
        this.core.resize(this.toJSON().resizeOptions)
    );
}
