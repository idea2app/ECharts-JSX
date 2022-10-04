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
import * as components from 'echarts/components';

export type ECBasicOption = Parameters<EChartsType['setOption']>[0];

type ECExtensions = Parameters<typeof use>[0];

export interface EC<T = {}> extends FC<T> {
    optionOf: (props: PropsWithChildren<T>) => ECBasicOption;
    loadModule?: () => Promise<ECExtensions>;
}

const optionCreator =
    <T,>(key: string) =>
    ({ children, ...props }: PropsWithChildren<T>) => ({ [key]: props });

function componentLoader(names: (keyof typeof components)[]) {
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

Title.loadModule = componentLoader(['TitleComponent']);

/**
 * @example
 * ```tsx
 * <Legend data={['sales']} />
 * ```
 */
export const Legend: EC<LegendComponentOption> = () => <></>;

Legend.optionOf = optionCreator('legend');

Legend.loadModule = componentLoader(['LegendComponent']);

/**
 * @example
 * ```tsx
 * <Tooltip />
 * ```
 */
export const Tooltip: EC<TooltipComponentOption> = () => <></>;

Tooltip.optionOf = optionCreator('tooltip');

Tooltip.loadModule = async () => {
    const [{ LabelLayout, UniversalTransition }, components] =
        await Promise.all([
            import('echarts/features'),
            componentLoader(['TooltipComponent'])()
        ]);
    return [LabelLayout, UniversalTransition, ...(components as any[])];
};

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

BarSeries.loadModule = async () => {
    const [{ BarChart }, components] = await Promise.all([
        import('echarts/charts'),
        componentLoader(['DatasetComponent', 'TransformComponent'])()
    ]);
    return [BarChart, ...(components as any[])];
};

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

XAxis.loadModule = componentLoader(['GridComponent']);

/**
 * @example
 * ```tsx
 * <YAxis />
 * ```
 */
export const YAxis: EC<YAXisComponentOption> = () => <></>;

YAxis.optionOf = optionCreator('yAxis');

YAxis.loadModule = componentLoader(['GridComponent']);
