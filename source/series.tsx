import { RegisteredSeriesOption } from 'echarts';

import { EC } from './charts';
import { componentLoader } from './components';

export type LineSeriesProps = Omit<RegisteredSeriesOption['line'], 'type'>;
/**
 * @example
 * ```tsx
 * <LineSeries data={[5, 20, 36, 10, 10, 20]} />
 * ```
 */
export const LineSeries: EC<LineSeriesProps> = () => <></>;

LineSeries.optionOf = ({ children, ...props }) => ({
    series: [{ ...props, type: 'line' }]
});

LineSeries.loadModule = async () => {
    const [{ LineChart }, { UniversalTransition }] = await Promise.all([
        import('echarts/charts'),
        import('echarts/features')
    ]);
    return [LineChart, UniversalTransition];
};

export type BarSeriesProps = Omit<RegisteredSeriesOption['bar'], 'type'>;
/**
 * @example
 * ```tsx
 * <BarSeries data={[5, 20, 36, 10, 10, 20]} />
 * ```
 */
export const BarSeries: EC<BarSeriesProps> = () => <></>;

BarSeries.optionOf = ({ children, ...props }) => ({
    series: [{ ...props, type: 'bar' }]
});

BarSeries.loadModule = async () => {
    const [{ BarChart }, { UniversalTransition }, components] =
        await Promise.all([
            import('echarts/charts'),
            import('echarts/features'),
            componentLoader(['DatasetComponent', 'TransformComponent'])()
        ]);
    return [BarChart, UniversalTransition, ...(components as any[])];
};

export type PieSeriesProps = Omit<RegisteredSeriesOption['pie'], 'type'>;
/**
 * @example
 * ```tsx
 * <PieSeries data={[
 *     { value: 1048, name: 'Search Engine' },
 *     { value: 735, name: 'Direct' },
 *     { value: 580, name: 'Email' },
 *     { value: 484, name: 'Union Ads' },
 *     { value: 300, name: 'Video Ads' }
 * ]} />
 * ```
 */
export const PieSeries: EC<PieSeriesProps> = () => <></>;

PieSeries.optionOf = ({ children, ...props }) => ({
    series: [{ ...props, type: 'pie' }]
});

PieSeries.loadModule = async () => {
    const [{ PieChart }, { UniversalTransition }] = await Promise.all([
        import('echarts/charts'),
        import('echarts/features')
    ]);
    return [PieChart, UniversalTransition];
};

export type ScatterSeriesProps = Omit<
    RegisteredSeriesOption['scatter'],
    'type'
>;
/**
 * @example
 * ```tsx
 * <ScatterSeries data={[
 *     [10.0, 8.04],
 *     [8.07, 6.95],
 *     [13.0, 7.58]
 * ]} />
 * ```
 */
export const ScatterSeries: EC<ScatterSeriesProps> = () => <></>;

ScatterSeries.optionOf = ({ children, ...props }) => ({
    series: [{ ...props, type: 'scatter' }]
});

ScatterSeries.loadModule = async () => {
    const [{ ScatterChart }, { UniversalTransition }] = await Promise.all([
        import('echarts/charts'),
        import('echarts/features')
    ]);
    return [ScatterChart, UniversalTransition];
};
