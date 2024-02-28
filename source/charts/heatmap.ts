import { JsxProps } from 'dom-renderer';
import { HeatmapSeriesOption } from 'echarts';
import { HeatmapChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-heatmap-chart',
    class ECHeatmapElement extends ECOptionElement {}
);
use(HeatmapChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-heatmap-chart': JsxProps<ECOptionElement> & HeatmapSeriesOption;
        }
    }
}
