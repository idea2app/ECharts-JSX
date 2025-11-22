import { RegisteredSeriesOption } from 'echarts/types/dist/shared';

import { EC } from '../charts';
import { SeriesProps, seriesOptionCreator, chartLoader } from '../utility';

export type HeatMapSeriesProps = SeriesProps<RegisteredSeriesOption['heatmap']>;

export const HeatMapSeries: EC<HeatMapSeriesProps> = () => <></>;

HeatMapSeries.optionOf = seriesOptionCreator('heatmap');

HeatMapSeries.loadModule = chartLoader(['HeatmapChart']);

export type GraphSeriesProps = SeriesProps<RegisteredSeriesOption['graph']>;

export const GraphSeries: EC<GraphSeriesProps> = () => <></>;

GraphSeries.optionOf = seriesOptionCreator('graph');

GraphSeries.loadModule = chartLoader(['GraphChart']);

export type FunnelSeriesProps = SeriesProps<RegisteredSeriesOption['funnel']>;

export const FunnelSeries: EC<FunnelSeriesProps> = () => <></>;

FunnelSeries.optionOf = seriesOptionCreator('funnel');

FunnelSeries.loadModule = chartLoader(['FunnelChart']);

export type ThemeRiverSeriesProps = SeriesProps<
    RegisteredSeriesOption['themeRiver']
>;
/**
 * @example
 * ```tsx
 * <ThemeRiverSeries
 *     data={[
 *         ['2015/11/08', 10, 'DQ'],
 *         ['2015/11/09', 15, 'DQ'],
 *         ['2015/11/10', 35, 'DQ']
 *     ]}
 * />
 * ```
 */
export const ThemeRiverSeries: EC<ThemeRiverSeriesProps> = () => <></>;

ThemeRiverSeries.optionOf = seriesOptionCreator('themeRiver');

ThemeRiverSeries.loadModule = chartLoader(['ThemeRiverChart']);

export type ChordSeriesProps = SeriesProps<RegisteredSeriesOption['chord']>;
/**
 * @example
 * ```tsx
 * <ChordSeries
 *     data={[{ name: 'node1' }, { name: 'node2' }]}
 *     links={[{ source: 0, target: 1, value: 10 }]}
 * />
 * ```
 */
export const ChordSeries: EC<ChordSeriesProps> = () => <></>;

ChordSeries.optionOf = seriesOptionCreator('chord');

ChordSeries.loadModule = chartLoader(['ChordChart']);
