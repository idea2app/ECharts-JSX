import { ECElementEvent } from 'echarts';
import {
    CustomElement,
    parseJSON,
    proxyPrototype,
    toCamelCase,
    toHyphenCase
} from 'web-utility';

import { EventKeyPattern } from './utility';

export abstract class ProxyElement<T extends object>
    extends HTMLElement
    implements CustomElement
{
    #data = {} as T;

    toJSON() {
        return Object.fromEntries(
            Object.entries(this.#data).filter(
                ([key, value]) =>
                    typeof value !== 'function' && !key.startsWith('__react')
            )
        );
    }

    constructor() {
        super();

        proxyPrototype(this, this.#data, (key, value) =>
            this.setProperty(key.toString(), value)
        );
    }

    connectedCallback() {
        const prototype = Object.getPrototypeOf(this);

        const customAttributes = [...this.attributes].filter(
            ({ name }) => !(name in prototype)
        );
        if (customAttributes[0] && !Object.keys(this.toJSON())[0])
            for (const { name, value } of customAttributes)
                this.setAttribute(name, value);
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
                if (EventKeyPattern.test(key)) {
                    this.removeEventListener(eventName, oldValue);
                    this.addEventListener(eventName, value);
                }
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

    setAttribute(name: string, value: string) {
        super.setAttribute(name, value);

        const key = toCamelCase(name);

        if (key in Object.getPrototypeOf(this)) return;

        this[key] = name === value || parseJSON(value);
    }
}
