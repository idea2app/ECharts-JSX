import { PropsWithChildren, FC } from 'react';
import { EChartsType, use } from 'echarts/core';
import type {
    TitleComponentOption,
    LegendComponentOption,
    TooltipComponentOption,
    SeriesOption,
    XAXisComponentOption,
    YAXisComponentOption
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
    optionOf?: (props: PropsWithChildren<T>) => ECBasicOption;
    loadModule?: () => Promise<ECExtensions>;
}

const optionOf = <T,>({ children, ...props }: PropsWithChildren<T>) => props;

function moduleLoader(names: ECModuleName[]) {
    return async (): Promise<ECExtensions> => {
        const components = await import('echarts/components');

        return names.map(name => components[name]);
    };
}

export type TitleProps = Omit<TitleComponentOption, 'text'>;

export const Title: EC<TitleProps> = () => <></>;

Title.optionOf = ({ children, ...props }) => ({
    title: { ...props, text: children }
});

Title.loadModule = moduleLoader(['TitleComponent']);

export const Legend: EC<LegendComponentOption> = () => <></>;

Legend.optionOf = optionOf;

Legend.loadModule = moduleLoader(['LegendComponent']);

export const Tooltip: EC<TooltipComponentOption> = () => <></>;

Tooltip.optionOf = optionOf;

Tooltip.loadModule = moduleLoader([
    'UniversalTransition',
    'LabelLayout',
    'TooltipComponent'
]);

export const Series: EC<SeriesOption> = () => <></>;

Series.loadModule = moduleLoader(['DatasetComponent', 'TransformComponent']);

export const XAxis: EC<XAXisComponentOption> = () => <></>;

XAxis.optionOf = optionOf;

XAxis.loadModule = moduleLoader(['BarChart', 'GridComponent']);

export const YAxis: EC<YAXisComponentOption> = () => <></>;

YAxis.optionOf = optionOf;

YAxis.loadModule = moduleLoader(['BarChart', 'GridComponent']);
