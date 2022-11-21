import type {
    RegisteredSeriesOption,
    RadarOption
} from 'echarts/types/dist/shared';

import { EC } from '../charts';
import {
    EventHandlerProps,
    SeriesProps,
    optionCreator,
    seriesOptionCreator,
    chartLoader
} from '../utility';

export type PieSeriesProps = SeriesProps<RegisteredSeriesOption['pie']>;
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

export type RadarProps = EventHandlerProps & RadarOption;

export const Radar: EC<RadarProps> = () => <></>;

Radar.optionOf = optionCreator('radar');

export type RadarSeriesProps = SeriesProps<RegisteredSeriesOption['radar']>;
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

export type SunburstSeriesProps = SeriesProps<
    RegisteredSeriesOption['sunburst']
>;
export const SunburstSeries: EC<SunburstSeriesProps> = () => <></>;

SunburstSeries.optionOf = seriesOptionCreator('sunburst');

SunburstSeries.loadModule = chartLoader(['SunburstChart']);

export type GaugeSeriesProps = SeriesProps<RegisteredSeriesOption['gauge']>;
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
