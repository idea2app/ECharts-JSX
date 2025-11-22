import { RegisteredSeriesOption } from 'echarts/types/dist/shared';

import { EC } from '../charts';
import { SeriesProps, seriesOptionCreator, chartLoader } from '../utility';

export type MapSeriesProps = SeriesProps<RegisteredSeriesOption['map']>;
/**
 * @example
 * ```tsx
 * <MapSeries map="china" data={[{ name: 'Beijing', value: 100 }]} />
 * ```
 */
export const MapSeries: EC<MapSeriesProps> = () => <></>;

MapSeries.optionOf = seriesOptionCreator('map');

MapSeries.loadModule = chartLoader(['MapChart']);

export type LinesSeriesProps = SeriesProps<RegisteredSeriesOption['lines']>;
/**
 * @example
 * ```tsx
 * <LinesSeries data={[{ coords: [[0, 0], [100, 100]] }]} />
 * ```
 */
export const LinesSeries: EC<LinesSeriesProps> = () => <></>;

LinesSeries.optionOf = seriesOptionCreator('lines');

LinesSeries.loadModule = chartLoader(['LinesChart']);
