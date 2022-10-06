import { RegisteredSeriesOption } from 'echarts';

import { EC } from '../charts';
import { componentLoader } from '../components';

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

export type CandlestickSeriesProps = Omit<
    RegisteredSeriesOption['candlestick'],
    'type'
>;
/**
 * @example
 * ```tsx
 * <CandlestickSeries data={[
 *     [20, 34, 10, 38],
 *     [40, 35, 30, 50],
 *     [31, 38, 33, 44],
 *     [38, 15, 5, 42]
 * ]} />
 * ```
 */
export const CandlestickSeries: EC<CandlestickSeriesProps> = () => <></>;

CandlestickSeries.optionOf = ({ children, ...props }) => ({
    series: [{ ...props, type: 'candlestick' }]
});

CandlestickSeries.loadModule = async () => {
    const [{ CandlestickChart }, { UniversalTransition }] = await Promise.all([
        import('echarts/charts'),
        import('echarts/features')
    ]);
    return [CandlestickChart, UniversalTransition];
};
