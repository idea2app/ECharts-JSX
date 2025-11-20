import { JsxProps } from 'dom-renderer';
import { HeatmapSeriesOption } from 'echarts';
import { HeatmapChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(HeatmapChart);

export class ECHeatmapChart extends ECOptionElement {}

globalThis.customElements?.define('ec-heatmap-chart', ECHeatmapChart);

export type ECHeatmapChartProps = JsxProps<ECOptionElement> &
    HeatmapSeriesOption;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-heatmap-chart': ECHeatmapChartProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-heatmap-chart': ECHeatmapChartProps;
            }
        }
    }
}
