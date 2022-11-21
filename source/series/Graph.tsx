import type {
    HeatmapSeriesOption,
    GraphSeriesOption,
    FunnelSeriesOption,
    ThemeRiverSeriesOption
} from 'echarts/charts';

import { EC } from '../charts';
import { SeriesProps, seriesOptionCreator, chartLoader } from '../utility';

export type HeatMapSeriesProps = SeriesProps<HeatmapSeriesOption>;

export const HeatMapSeries: EC<HeatMapSeriesProps> = () => <></>;

HeatMapSeries.optionOf = seriesOptionCreator('heatmap');

HeatMapSeries.loadModule = chartLoader(['HeatmapChart']);

export type GraphSeriesProps = SeriesProps<GraphSeriesOption>;

export const GraphSeries: EC<GraphSeriesProps> = () => <></>;

GraphSeries.optionOf = seriesOptionCreator('graph');

GraphSeries.loadModule = chartLoader(['GraphChart']);

export type FunnelSeriesProps = SeriesProps<FunnelSeriesOption>;

export const FunnelSeries: EC<FunnelSeriesProps> = () => <></>;

FunnelSeries.optionOf = seriesOptionCreator('funnel');

FunnelSeries.loadModule = chartLoader(['FunnelChart']);

export type ThemeRiverSeriesProps = SeriesProps<ThemeRiverSeriesOption>;
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
