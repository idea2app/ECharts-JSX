import { JsxProps } from 'dom-renderer';
import { HeatmapSeriesOption } from 'echarts';
import { HeatmapChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(HeatmapChart);

export class ECHeatmapChart extends ECOptionElement {}

globalThis.customElements?.define('ec-heatmap-chart', ECHeatmapChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-heatmap-chart': JsxProps<ECOptionElement> & HeatmapSeriesOption;
        }
    }
}
