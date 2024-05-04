import { ECElementEvent } from 'echarts/core';
import {
    ReadableStream,
    ReadableStreamDefaultController
} from 'web-streams-polyfill';

export interface QueueTask {
    context: object;
    input: any[];
    output: PromiseWithResolvers<any>;
}

export interface CallBusWrapper<T> {
    (...data: any[]): Promise<T>;
}

export interface CallBusHandlers {
    start: () => Promise<void>;
    run: () => void;
}

export function callBus<T>(worker: (...data: any[]) => T) {
    const clutch = Promise.withResolvers<void>();

    var handler: ReadableStreamDefaultController<QueueTask>;

    const stream = new ReadableStream<QueueTask>({
        start: controller => {
            handler = controller;
        }
    });

    function addTask(context: object, input: any[]) {
        const task = {
            context,
            input,
            output: Promise.withResolvers<T>()
        };
        handler.enqueue(task);

        return task;
    }

    const run = () => clutch.resolve();

    async function start() {
        await clutch.promise;

        for await (const { context, input, output } of stream)
            try {
                const data = await worker.apply(context, input);

                output.resolve(data);
            } catch (error) {
                output.reject(error);
            }
    }
    return Object.assign<CallBusWrapper<T>, CallBusHandlers>(
        function (...input) {
            return addTask(this, input).output.promise;
        },
        { start, run }
    );
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
