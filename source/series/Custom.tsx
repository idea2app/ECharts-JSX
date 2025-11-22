import { RegisteredSeriesOption } from 'echarts/types/dist/shared';

import { EC } from '../charts';
import { SeriesProps, seriesOptionCreator, chartLoader } from '../utility';

export type CustomSeriesProps = SeriesProps<RegisteredSeriesOption['custom']>;
/**
 * @example
 * ```tsx
 * <CustomSeries renderItem={(params, api) => ({ type: 'circle' })} />
 * ```
 */
export const CustomSeries: EC<CustomSeriesProps> = () => <></>;

CustomSeries.optionOf = seriesOptionCreator('custom');

CustomSeries.loadModule = chartLoader(['CustomChart']);
