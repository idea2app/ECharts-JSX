import { RegisteredSeriesOption } from 'echarts';
import { RadarOption } from 'echarts/types/dist/shared';

import { EC, optionCreator } from '../charts';

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
    const { PieChart } = await import('echarts/charts');

    return [PieChart];
};

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

RadarSeries.optionOf = ({ children, ...props }) => ({
    series: [{ ...props, type: 'radar' }]
});

RadarSeries.loadModule = async () => {
    const { RadarChart } = await import('echarts/charts');

    return [RadarChart];
};
