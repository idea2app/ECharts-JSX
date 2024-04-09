import { EChartsOption } from 'echarts';
import { CustomElement, toCamelCase } from 'web-utility';

import { EChartsElement } from './renderers/core';
import { ProxyElement } from './Proxy';
import {
    EventKeyPattern,
    ZRElementEventHandler,
    ZRElementEventName
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

    get renderer() {
        for (
            let parent = this.parentElement;
            parent;
            parent = parent.parentElement
        )
            if (parent instanceof EChartsElement) return parent;
    }

    connectedCallback() {
        for (const [key, value] of Object.entries(this.toJSON()))
            if (EventKeyPattern.test(key) && typeof value === 'function')
                this.addEventListener(key.slice(2), value);
        this.update();
    }

    setProperty(key: string, value: any) {
        super.setProperty(key, value);

        if (this.isConnected) this.update();
    }

    update() {
        const data = this.toJSON();

        this.dispatchEvent(
            new CustomEvent('optionchange', {
                bubbles: true,
                detail: this.isSeries
                    ? { series: [{ ...data, type: this.chartName }] }
                    : { [this.chartTagName]: data }
            })
        );
    }

    #emit: ZRElementEventHandler = detail =>
        this.dispatchEvent(new CustomEvent(`ec-${detail.type}`, { detail }));

    addEventListener(event: string, handler: EventListener) {
        if (!this.isConnected) return;

        this.renderer?.onChild(
            event as ZRElementEventName,
            this.eventSelector,
            this.#emit
        );
        super.addEventListener(`ec-${event}`, handler);
    }

    removeEventListener(event: string, handler: EventListener) {
        if (!this.isConnected) return;

        this.renderer?.offChild(
            event as ZRElementEventName,
            this.eventSelector,
            this.#emit
        );
        super.removeEventListener(`ec-${event}`, handler);
    }

    setAttribute(name: string, value: string) {
        super.setAttribute(name, value);

        const key = toCamelCase(name);

        if (key in Object.getPrototypeOf(this)) return;

        this[key] = name === value || value;
    }
}
