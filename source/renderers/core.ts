import { EChartsOption, ResizeOpts } from 'echarts';
import { ECharts, init } from 'echarts/core';
import { ECBasicOption } from 'echarts/types/dist/shared';
import { debounce } from 'lodash';
import { ReadableStream } from 'web-streams-polyfill';
import { CustomElement, parseDOM } from 'web-utility';

import { ProxyElement } from '../Proxy';
import {
    StreamRequest,
    ZRElementEventHandler,
    ZRElementEventName,
    streamRequest,
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
    #core?: ECharts;
    #coreDefer = Promise.withResolvers<void>();

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
    }

    connectedCallback() {
        if (this.#core) return;

        super.connectedCallback();

        this.style.display = 'block';

        this.#init();

        globalThis.addEventListener?.('resize', this.handleResize);
    }

    disconnectedCallback() {
        globalThis.removeEventListener?.('resize', this.handleResize);

        this.#core?.dispose();
        this.#core = undefined;
    }

    #init() {
        var { theme, initOptions, ...props } = this.toJSON();

        this.#core = init(
            this.shadowRoot.firstElementChild as HTMLDivElement,
            theme,
            { ...initOptions, renderer: this.renderer }
        );
        this.#coreDefer.resolve();

        this.setOption({ grid: {}, ...props });

        this.processStream(this.setOption.stream, (data: EChartsOption) => {
            this.#core.setOption(data, false, true);
        });
        this.processStream(
            this.removeEventListener.stream,
            (event: string, handler: EventListener) => {
                this.#core.getZr().off(event, unwrapEventHandler(handler));
            }
        );
        this.processStream(
            this.addEventListener.stream,
            (name: string, handler: EventListener) => {
                this.#core
                    .getZr()
                    .on(
                        name as ZRElementEventName,
                        wrapEventHandler.call(this, name, handler)
                    );
            }
        );
    }
    setOption = streamRequest<[EChartsOption]>();

    setProperty(key: string, value: any) {
        super.setProperty(key, value);

        this.setOption(this.toJSON());
    }

    protected async processStream<I extends any[], O = void>(
        stream: ReadableStream<StreamRequest<I>>,
        executor: (...input: I) => O,
        context?: object
    ) {
        await this.#coreDefer.promise;

        for await (const request of stream) {
            const { input, output } = request as StreamRequest<I>;

            try {
                const data = executor.apply(context, input);

                output.resolve(data);
            } catch (error) {
                output.reject(error);
            }
        }
    }
    protected connectChildStream<I extends any[], O = void>(
        executor: (...input: I) => O
    ) {
        const that = this;

        return function (stream: ReadableStream<StreamRequest<I>>) {
            return that.processStream(stream, executor, this);
        };
    }

    connectOption = this.connectChildStream((option: EChartsOption) =>
        this.setOption(option)
    );

    connectAddListener = this.connectChildStream(
        (event: string, selector: string, handler: ZRElementEventHandler) => {
            this.#core.on(event as ZRElementEventName, selector, handler);
        }
    );
    connectRemoveListener = this.connectChildStream(
        (event: string, handler: ZRElementEventHandler) => {
            this.#core.off(event as ZRElementEventName, handler);
        }
    );
    addEventListener = streamRequest<[string, EventListener]>();

    removeEventListener = streamRequest<[string, EventListener]>();

    handleResize = debounce(() =>
        this.#core.resize(this.toJSON().resizeOptions)
    );
}
