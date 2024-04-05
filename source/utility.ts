import { ECElementEvent } from 'echarts/core';

export const EventKeyPattern = /^on(\w+)/;

export type ZRElementEventName = ECElementEvent['type'];
export type ZRElementEventHandler = (event: ECElementEvent) => boolean | void;
