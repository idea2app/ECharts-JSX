import { ECElementEvent } from 'echarts/core';

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
    const queue = [Promise.withResolvers<QueueTask>()],
        clutch = Promise.withResolvers<void>();

    function addTask(context: object, input: any[]) {
        const task = {
            context,
            input,
            output: Promise.withResolvers<T>()
        };
        queue.at(-1).resolve(task);

        queue.push(Promise.withResolvers());

        return task;
    }

    const run = () => clutch.resolve();

    async function start() {
        await clutch.promise;

        for (let task = queue.shift(); task; task = queue.shift()) {
            const { context, input, output } = await task.promise;
            try {
                const data = await worker.apply(context, input);

                output.resolve(data);
            } catch (error) {
                output.reject(error);
            }
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
