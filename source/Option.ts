import { EChartsOption } from 'echarts';
import { CustomElement, toCamelCase } from 'web-utility';

import { EChartsElement } from './renderers/core';
import { ProxyElement } from './Proxy';
import {
    ZRElementEventHandler,
    streamRequest,
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

    #renderer?: EChartsElement;

    connectedCallback() {
        if (this.#renderer) return;

        super.connectedCallback();

        if (!this.attributes[0]) this.updateOption();

        for (
            let parent = this.parentElement;
            parent;
            parent = parent.parentElement
        )
            if (parent instanceof EChartsElement) this.#renderer = parent;

        if (!this.#renderer)
            throw new ReferenceError(
                `<${this.tagName.toLowerCase()} /> should be append to a DOM tree within <ec-svg-renderer /> or <ec-canvas-renderer />`
            );
        this.#renderer.connectOption(this.emitOption.stream);
        this.#renderer.connectRemoveListener(this.emitRemoveListener.stream);
        this.#renderer.connectAddListener(this.emitAddListener.stream);
    }

    #nextTick?: Promise<void>;

    setProperty(key: string, value: any) {
        super.setProperty(key, value);

        this.#nextTick ??= Promise.resolve().then(() => {
            this.updateOption();
            this.#nextTick = null;
        });
    }

    emitOption = streamRequest<[EChartsOption]>();

    declare formatter?: Function;

    updateOption() {
        const data = this.toJSON(),
            { formatter } = this;

        const option = (
            this.isSeries
                ? { series: [{ ...data, type: this.chartName }] }
                : { [this.chartTagName]: { ...data, formatter } }
        ) as EChartsOption;

        return this.emitOption(option);
    }

    emitAddListener = streamRequest<[string, string, ZRElementEventHandler]>();

    addEventListener(name: string, handler: EventListener) {
        return this.emitAddListener(
            name,
            this.eventSelector,
            wrapEventHandler.call(this, name, handler)
        );
    }

    emitRemoveListener = streamRequest<[string, ZRElementEventHandler]>();

    removeEventListener(event: string, handler: EventListener) {
        return this.emitRemoveListener(event, unwrapEventHandler(handler));
    }
}
