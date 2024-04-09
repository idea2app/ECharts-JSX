import { ECElementEvent } from 'echarts';
import { proxyPrototype, toHyphenCase } from 'web-utility';

import { EventKeyPattern } from './utility';

export abstract class ProxyElement<T extends object> extends HTMLElement {
    #data = {} as T;

    toJSON() {
        return Object.fromEntries(
            Object.entries(this.#data).filter(
                ([key]) => !key.startsWith('__react')
            )
        );
    }

    constructor() {
        super();

        proxyPrototype(this, this.#data, (key, value) =>
            this.setProperty(key.toString(), value)
        );
    }

    setProperty(key: string, value: any) {
        const oldValue = this.#data[key],
            name = toHyphenCase(key),
            eventName = key.slice(2) as ECElementEvent['type'];
        this.#data[key] = value;

        switch (typeof value) {
            case 'object':
                if (!value) this.removeAttribute(name);
                break;
            case 'boolean':
                if (value) super.setAttribute(name, name + '');
                else super.removeAttribute(name);
                break;
            case 'function':
                if (EventKeyPattern.test(key))
                    this.addEventListener(eventName, value);
                break;
            default:
                if (value != null)
                    super.setAttribute(
                        name,
                        typeof value === 'string'
                            ? value
                            : JSON.stringify(value)
                    );
                else if (
                    EventKeyPattern.test(key) &&
                    typeof oldValue === 'function'
                )
                    this.removeEventListener(eventName, value);
                else super.removeAttribute(name);
        }
    }
}
