import { RegisteredSeriesOption } from 'echarts/types/dist/shared';

import { EC } from '../charts';
import { SeriesProps, seriesOptionCreator, chartLoader } from '../utility';

export type TreeSeriesProps = SeriesProps<RegisteredSeriesOption['tree']>;

export const TreeSeries: EC<TreeSeriesProps> = () => <></>;

TreeSeries.optionOf = seriesOptionCreator('tree');

TreeSeries.loadModule = chartLoader(['TreeChart']);

export type TreeMapSeriesProps = SeriesProps<RegisteredSeriesOption['treemap']>;

export const TreeMapSeries: EC<TreeMapSeriesProps> = () => <></>;

TreeMapSeries.optionOf = seriesOptionCreator('treemap');

TreeMapSeries.loadModule = chartLoader(['TreemapChart']);

export type SankeySeriesProps = SeriesProps<RegisteredSeriesOption['sankey']>;

export const SankeySeries: EC<SankeySeriesProps> = () => <></>;

SankeySeries.optionOf = seriesOptionCreator('sankey');

SankeySeries.loadModule = chartLoader(['SankeyChart']);
