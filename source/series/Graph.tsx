import type {
    HeatmapSeriesOption,
    GraphSeriesOption,
    FunnelSeriesOption,
    ThemeRiverSeriesOption
} from 'echarts/charts';

import { EC } from '../charts';
import { seriesOptionCreator, chartLoader } from '../utility';

export type HeatMapSeriesProps = Omit<HeatmapSeriesOption, 'type'>;

export const HeatMapSeries: EC<HeatMapSeriesProps> = () => <></>;

HeatMapSeries.optionOf = seriesOptionCreator('heatmap');

HeatMapSeries.loadModule = chartLoader(['HeatmapChart']);

export type GraphSeriesProps = Omit<GraphSeriesOption, 'type'>;

export const GraphSeries: EC<GraphSeriesProps> = () => <></>;

GraphSeries.optionOf = seriesOptionCreator('graph');

GraphSeries.loadModule = chartLoader(['GraphChart']);

export type FunnelSeriesProps = Omit<FunnelSeriesOption, 'type'>;

export const FunnelSeries: EC<FunnelSeriesProps> = () => <></>;

FunnelSeries.optionOf = seriesOptionCreator('funnel');

FunnelSeries.loadModule = chartLoader(['FunnelChart']);

export type ThemeRiverSeriesProps = Omit<ThemeRiverSeriesOption, 'type'>;
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
