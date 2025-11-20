import { JsxProps } from 'dom-renderer';
import { TreemapSeriesOption } from 'echarts';
import { TreemapChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(TreemapChart);

export class ECTreemapChart extends ECOptionElement {}

globalThis.customElements?.define('ec-treemap-chart', ECTreemapChart);

export type ECTreemapChartProps = JsxProps<ECOptionElement> &
    TreemapSeriesOption;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-treemap-chart': ECTreemapChartProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-treemap-chart': ECTreemapChartProps;
            }
        }
    }
}
