import type {
    RegisteredSeriesOption,
    RadarOption
} from 'echarts/types/dist/shared';

import { EC } from '../charts';
import { optionCreator, seriesOptionCreator, chartLoader } from '../utility';

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

PieSeries.optionOf = seriesOptionCreator('pie');

PieSeries.loadModule = chartLoader(['PieChart']);

export const Radar: EC<RadarOption> = () => <></>;

Radar.optionOf = optionCreator('radar');

export type RadarSeriesProps = Omit<RegisteredSeriesOption['radar'], 'type'>;
/**
 * @example
 * ```tsx
 * <RadarSeries data={[
 *     [20, 34, 10, 38],
 *     [40, 35, 30, 50],
 *     [31, 38, 33, 44],
 *     [38, 15, 5, 42]
 * ]} />
 * ```
 */
export const RadarSeries: EC<RadarSeriesProps> = () => <></>;

RadarSeries.optionOf = seriesOptionCreator('radar');

RadarSeries.loadModule = chartLoader(['RadarChart']);

export type SunburstSeriesProps = Omit<
    RegisteredSeriesOption['sunburst'],
    'type'
>;
export const SunburstSeries: EC<SunburstSeriesProps> = () => <></>;

SunburstSeries.optionOf = seriesOptionCreator('sunburst');

SunburstSeries.loadModule = chartLoader(['SunburstChart']);

export type GaugeSeriesProps = Omit<RegisteredSeriesOption['gauge'], 'type'>;
/**
 * @example
 * ```tsx
 * <GaugeSeries
 *     name="Pressure"
 *     detail={{ formatter: '{value}' }}
 *     data={[{ value: 50, name: 'SCORE' }]}
 * />
 */
export const GaugeSeries: EC<GaugeSeriesProps> = () => <></>;

GaugeSeries.optionOf = seriesOptionCreator('gauge');

GaugeSeries.loadModule = chartLoader(['GaugeChart']);
