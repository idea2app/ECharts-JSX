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
        return [this.chartName || this.chartTagName, this['type']]
            .filter(Boolean)
            .join('.');
    }

    connectedCallback() {
        for (const [key, value] of Object.entries(this.toJSON()))
            if (EventKeyPattern.test(key) && typeof value === 'function')
                this.listen(
                    key.slice(2) as ZRElementEventName,
                    value as ZRElementEventHandler
                );
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

    listen(event: ZRElementEventName, handler: ZRElementEventHandler) {
        if (this.isConnected)
            this.closest<EChartsElement>('ec-chart')?.onChild(
                event,
                this.eventSelector,
                handler
            );
    }

    forget(event: ZRElementEventName, handler: ZRElementEventHandler) {
        if (this.isConnected)
            this.closest<EChartsElement>('ec-chart')?.offChild(
                event,
                this.eventSelector,
                handler
            );
    }

    setAttribute(name: string, value: string) {
        super.setAttribute(name, value);

        const key = toCamelCase(name);

        if (key in Object.getPrototypeOf(this)) return;

        this[key] = name === value || value;
    }
}
