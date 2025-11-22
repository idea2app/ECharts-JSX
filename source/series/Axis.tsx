import type { RegisteredSeriesOption } from 'echarts/types/dist/shared';
import type {
    BoxplotSeriesOption,
    CustomSeriesOption,
    EffectScatterSeriesOption,
    LinesSeriesOption,
    MapSeriesOption,
    PictorialBarSeriesOption
} from 'echarts/charts';

import { EC } from '../charts';
import {
    SeriesProps,
    seriesOptionCreator,
    chartLoader,
    componentLoader
} from '../utility';

export type ParallelSeriesProps = SeriesProps<
    RegisteredSeriesOption['parallel']
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

export type ScatterSeriesProps = SeriesProps<RegisteredSeriesOption['scatter']>;
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

export type LineSeriesProps = SeriesProps<RegisteredSeriesOption['line']>;
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

export type BarSeriesProps = SeriesProps<RegisteredSeriesOption['bar']>;
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

export type CandlestickSeriesProps = SeriesProps<
    RegisteredSeriesOption['candlestick']
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

export type BoxplotSeriesProps = SeriesProps<BoxplotSeriesOption>;
/**
 * @example
 * ```tsx
 * <BoxplotSeries data={[[850, 740, 900, 1070, 930]]} />
 * ```
 */
export const BoxplotSeries: EC<BoxplotSeriesProps> = () => <></>;

BoxplotSeries.optionOf = seriesOptionCreator('boxplot');

BoxplotSeries.loadModule = chartLoader(['BoxplotChart']);

export type CustomSeriesProps = SeriesProps<CustomSeriesOption>;
/**
 * @example
 * ```tsx
 * <CustomSeries renderItem={(params, api) => ({ type: 'circle' })} />
 * ```
 */
export const CustomSeries: EC<CustomSeriesProps> = () => <></>;

CustomSeries.optionOf = seriesOptionCreator('custom');

CustomSeries.loadModule = chartLoader(['CustomChart']);

export type EffectScatterSeriesProps = SeriesProps<EffectScatterSeriesOption>;
/**
 * @example
 * ```tsx
 * <EffectScatterSeries data={[[10, 20], [20, 30]]} />
 * ```
 */
export const EffectScatterSeries: EC<EffectScatterSeriesProps> = () => <></>;

EffectScatterSeries.optionOf = seriesOptionCreator('effectScatter');

EffectScatterSeries.loadModule = chartLoader(['EffectScatterChart']);

export type LinesSeriesProps = SeriesProps<LinesSeriesOption>;
/**
 * @example
 * ```tsx
 * <LinesSeries data={[{ coords: [[0, 0], [100, 100]] }]} />
 * ```
 */
export const LinesSeries: EC<LinesSeriesProps> = () => <></>;

LinesSeries.optionOf = seriesOptionCreator('lines');

LinesSeries.loadModule = chartLoader(['LinesChart']);

export type MapSeriesProps = SeriesProps<MapSeriesOption>;
/**
 * @example
 * ```tsx
 * <MapSeries map="china" data={[{ name: 'Beijing', value: 100 }]} />
 * ```
 */
export const MapSeries: EC<MapSeriesProps> = () => <></>;

MapSeries.optionOf = seriesOptionCreator('map');

MapSeries.loadModule = chartLoader(['MapChart']);

export type PictorialBarSeriesProps = SeriesProps<PictorialBarSeriesOption>;
/**
 * @example
 * ```tsx
 * <PictorialBarSeries data={[10, 20, 30]} />
 * ```
 */
export const PictorialBarSeries: EC<PictorialBarSeriesProps> = () => <></>;

PictorialBarSeries.optionOf = seriesOptionCreator('pictorialBar');

PictorialBarSeries.loadModule = chartLoader(['PictorialBarChart']);
