import { PropsWithChildren, FC } from 'react';
import { EChartsType, use } from 'echarts/core';
import type {
    TitleComponentOption,
    LegendComponentOption,
    TooltipComponentOption,
    XAXisComponentOption,
    YAXisComponentOption,
    RegisteredSeriesOption
} from 'echarts';
import * as renderers from 'echarts/renderers';
import * as charts from 'echarts/charts';
import * as features from 'echarts/features';
import * as components from 'echarts/components';

export type ECBasicOption = Parameters<EChartsType['setOption']>[0];

type ECExtensions = Parameters<typeof use>[0];

type ECModuleName =
    | keyof typeof renderers
    | keyof typeof charts
    | keyof typeof features
    | keyof typeof components;

export interface EC<T = {}> extends FC<T> {
    optionOf: (props: PropsWithChildren<T>) => ECBasicOption;
    loadModule?: () => Promise<ECExtensions>;
}

const optionCreator =
    <T,>(key: string) =>
    ({ children, ...props }: PropsWithChildren<T>) => ({ [key]: props });

function moduleLoader(names: ECModuleName[]) {
    return async (): Promise<ECExtensions> => {
        const components = await import('echarts/components');

        return names.map(name => components[name]);
    };
}

export type TitleProps = Omit<TitleComponentOption, 'text'>;
/**
 * @example
 * ```tsx
 * <Title>Hello, ECharts JSX!</Title>
 * ```
 */
export const Title: EC<TitleProps> = () => <></>;

Title.optionOf = ({ children, ...props }) => ({
    title: { ...props, text: children }
});

Title.loadModule = moduleLoader(['TitleComponent']);
/**
 * @example
 * ```tsx
 * <Legend data={['sales']} />
 * ```
 */
export const Legend: EC<LegendComponentOption> = () => <></>;

Legend.optionOf = optionCreator('legend');

Legend.loadModule = moduleLoader(['LegendComponent']);
/**
 * @example
 * ```tsx
 * <Tooltip />
 * ```
 */
export const Tooltip: EC<TooltipComponentOption> = () => <></>;

Tooltip.optionOf = optionCreator('tooltip');

Tooltip.loadModule = moduleLoader([
    'UniversalTransition',
    'LabelLayout',
    'TooltipComponent'
]);

export type BarSeriesProps = Omit<RegisteredSeriesOption['bar'], 'type'>;
/**
 * @example
 * ```tsx
 * <BarSeries name="sales" data={[5, 20, 36, 10, 10, 20]} />
 * ```
 */
export const BarSeries: EC<BarSeriesProps> = () => <></>;

BarSeries.optionOf = ({ children, ...props }) => ({
    series: [{ ...props, type: 'bar' }]
});

BarSeries.loadModule = moduleLoader([
    'DatasetComponent',
    'TransformComponent',
    'BarChart'
]);
/**
 * @example
 * ```tsx
 * <XAxis
 *     data={['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']}
 * />
 * ```
 */
export const XAxis: EC<XAXisComponentOption> = () => <></>;

XAxis.optionOf = optionCreator('xAxis');

XAxis.loadModule = moduleLoader(['GridComponent']);
/**
 * @example
 * ```tsx
 * <YAxis />
 * ```
 */
export const YAxis: EC<YAXisComponentOption> = () => <></>;

YAxis.optionOf = optionCreator('yAxis');

YAxis.loadModule = moduleLoader(['GridComponent']);
