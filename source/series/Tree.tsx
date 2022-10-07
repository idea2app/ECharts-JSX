import {
    TreeSeriesOption,
    TreemapSeriesOption,
    SankeySeriesOption
} from 'echarts/types/dist/shared';

import { EC } from '../charts';
import { seriesOptionCreator, chartLoader } from '../utility';

export type TreeSeriesProps = Omit<TreeSeriesOption, 'type'>;

export const TreeSeries: EC<TreeSeriesProps> = () => <></>;

TreeSeries.optionOf = seriesOptionCreator('tree');

TreeSeries.loadModule = chartLoader(['TreeChart']);

export type TreeMapSeriesProps = Omit<TreemapSeriesOption, 'type'>;

export const TreeMapSeries: EC<TreeMapSeriesProps> = () => <></>;

TreeMapSeries.optionOf = seriesOptionCreator('treemap');

TreeMapSeries.loadModule = chartLoader(['TreemapChart']);

export type SankeySeriesProps = Omit<SankeySeriesOption, 'type'>;

export const SankeySeries: EC<SankeySeriesProps> = () => <></>;

SankeySeries.optionOf = seriesOptionCreator('sankey');

SankeySeries.loadModule = chartLoader(['SankeyChart']);
