import { ECElementEvent } from 'echarts/core';
import {
    ReadableStream,
    ReadableStreamDefaultController
} from 'web-streams-polyfill';

export interface StreamRequest<I extends any[], O = void> {
    context?: object;
    input: I;
    output: PromiseWithResolvers<O>;
}

export function streamRequest<I extends any[], O = void>() {
    var handler: ReadableStreamDefaultController<StreamRequest<I, O>>;

    const stream = new ReadableStream<StreamRequest<I, O>>({
        start: controller => {
            handler = controller;
        }
    });

    function call(...input: I) {
        const request = {
            context: this,
            input,
            output: Promise.withResolvers<O>()
        };
        handler.enqueue(request);

        return request.output.promise;
    }

    return Object.assign(call, { stream });
}

export const EventKeyPattern = /^on(\w+)/;

export type ZRElementEventName = ECElementEvent['type'];
export type ZRElementEventHandler = (event: ECElementEvent) => boolean | void;

const EventHandlerMap = new WeakMap<EventListener, ZRElementEventHandler>();

export function wrapEventHandler(
    this: EventTarget,
    name: string,
    handler: EventListener
) {
    const wrapper: ZRElementEventHandler = detail => {
        const event = new CustomEvent(name, { detail }),
            meta = { enumerable: true, value: this };

        Object.defineProperties(event, {
            eventPhase: { ...meta, value: Event.AT_TARGET },
            srcElement: meta,
            target: meta,
            currentTarget: meta
        });
        handler.call(this, event);
    };

    EventHandlerMap.set(handler, wrapper);

    return wrapper;
}

export const unwrapEventHandler = (handler: EventListener) =>
    EventHandlerMap.get(handler);
