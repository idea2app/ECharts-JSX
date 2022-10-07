import type { RegisteredSeriesOption } from 'echarts/types/dist/shared';

import { EC } from '../charts';
import { seriesOptionCreator, chartLoader, componentLoader } from '../utility';

export type ParallelSeriesProps = Omit<
    RegisteredSeriesOption['parallel'],
    'type'
>;
/**
 * @example
 * ```tsx
 * <ParallelSeries data={[
 *     [12.99, 100, 82, 'Good'],
 *     [9.99, 80, 77, 'OK'],
 *     [20, 120, 60, 'Excellent']
 * ]} />
 * ```
 */
export const ParallelSeries: EC<ParallelSeriesProps> = () => <></>;

ParallelSeries.optionOf = seriesOptionCreator('parallel');

ParallelSeries.loadModule = chartLoader(['ParallelChart']);

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

ScatterSeries.optionOf = seriesOptionCreator('scatter');

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

LineSeries.optionOf = seriesOptionCreator('line');

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

BarSeries.optionOf = seriesOptionCreator('bar');

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

CandlestickSeries.optionOf = seriesOptionCreator('candlestick');

CandlestickSeries.loadModule = async () => {
    const [{ CandlestickChart }, { UniversalTransition }] = await Promise.all([
        import('echarts/charts'),
        import('echarts/features')
    ]);
    return [CandlestickChart, UniversalTransition];
};
