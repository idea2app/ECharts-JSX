import { PropsWithChildren } from 'react';
import {
    RegisteredSeriesOption,
    SeriesOption
} from 'echarts/types/dist/shared';
import { EChartsType, use } from 'echarts/core';
import * as charts from 'echarts/charts';
import * as components from 'echarts/components';

export type ECBasicOption = Parameters<EChartsType['setOption']>[0];

export type ECExtensions = Parameters<typeof use>[0];

export const optionCreator =
    <T>(key: string) =>
    ({ children, ...props }: PropsWithChildren<T>) => ({ [key]: props });

export const seriesOptionCreator =
    <T extends SeriesOption>(type: keyof RegisteredSeriesOption) =>
    ({ children, ...props }: PropsWithChildren<T>) => ({
        series: { ...props, type }
    });

export const chartLoader = (names: (keyof typeof charts)[]) => async () => {
    const module = await import('echarts/charts');

    return names.map(name => module[name]);
};

export const componentLoader =
    (names: (keyof typeof components)[]) => async (): Promise<ECExtensions> => {
        const module = await import('echarts/components');

        return names.map(name => module[name]);
    };
