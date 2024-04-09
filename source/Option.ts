import { EChartsOption } from 'echarts';
import { CustomElement, toCamelCase } from 'web-utility';

import { EChartsElement } from './renderers/core';
import { ProxyElement } from './Proxy';
import { ZRElementEventHandler, ZRElementEventName } from './utility';

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

    #events: string[] = [];

    connectedCallback() {
        for (const event of this.#events) this.#listen(event);

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

    #listen = (event: string) =>
        this.renderer.core.on(
            event as ZRElementEventName,
            this.eventSelector,
            this.#emit
        );
    addEventListener(event: string, handler: EventListener) {
        if (this.renderer) this.#listen(event);
        else this.#events.push(event);

        super.removeEventListener(`ec-${event}`, handler);
        super.addEventListener(`ec-${event}`, handler);
    }

    removeEventListener(event: string, handler: EventListener) {
        if (this.renderer)
            this.renderer.core.off(event as ZRElementEventName, this.#emit);
        else this.#events = this.#events.filter(name => name !== event);

        super.removeEventListener(`ec-${event}`, handler);
    }

    setAttribute(name: string, value: string) {
        super.setAttribute(name, value);

        const key = toCamelCase(name);

        if (key in Object.getPrototypeOf(this)) return;

        this[key] = name === value || value;
    }
}
