import { EChartsOption } from 'echarts';
import { CustomElement, toCamelCase } from 'web-utility';

import { EChartsElement } from './renderers/core';
import { ProxyElement } from './Proxy';
import {
    ZRElementEventName,
    callBus,
    unwrapEventHandler,
    wrapEventHandler
} from './utility';

export abstract class ECOptionElement
    extends ProxyElement<EChartsOption>
    implements CustomElement
{
    get chartTagName() {
        return toCamelCase(this.tagName.replace(/^ec-/i, '').toLowerCase());
    }

    get isSeries() {
        return this.chartTagName.endsWith('Chart');
    }

    get chartName() {
        return this.isSeries ? this.chartTagName.replace(/Chart$/, '') : null;
    }

    get eventSelector() {
        return [
            this.isSeries && 'series',
            this.chartName || this.chartTagName,
            this['type']
        ]
            .filter(Boolean)
            .join('.');
    }

    renderer?: EChartsElement;

    constructor() {
        super();

        this.updateOption.start();
        this.removeEventListener.start();
        this.addEventListener.start();
    }

    async connectedCallback() {
        super.connectedCallback();

        for (
            let parent = this.parentElement;
            parent;
            parent = parent.parentElement
        )
            if (parent instanceof EChartsElement) this.renderer = parent;

        if (!this.renderer)
            throw new ReferenceError(
                `<${this.tagName.toLowerCase()} /> should be append to a DOM tree within <ec-svg-renderer /> or <ec-canvas-renderer />`
            );
        await this.renderer.ready;

        this.updateOption.run();
        this.removeEventListener.run();
        this.addEventListener.run();
    }

    #nextTick?: Promise<void>;

    setProperty(key: string, value: any) {
        super.setProperty(key, value);

        this.#nextTick ??= Promise.resolve().then(() => {
            this.updateOption();
            this.#nextTick = null;
        });
    }

    updateOption = callBus(() => {
        const data = this.toJSON();

        const option = this.isSeries
            ? { series: [{ ...data, type: this.chartName }] }
            : { [this.chartTagName]: data };

        this.renderer.setOption(option);
    });

    addEventListener = callBus((name: string, handler: EventListener) => {
        this.renderer.core.on(
            name as ZRElementEventName,
            this.eventSelector,
            wrapEventHandler.call(this, name, handler)
        );
    });

    removeEventListener = callBus((event: string, handler: EventListener) => {
        this.renderer.core.off(
            event as ZRElementEventName,
            unwrapEventHandler(handler)
        );
    });
}
