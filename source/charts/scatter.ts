import { JsxProps } from 'dom-renderer';
import { ScatterSeriesOption } from 'echarts';
import { ScatterChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(ScatterChart);

export class ECScatterChart extends ECOptionElement {}

globalThis.customElements?.define('ec-scatter-chart', ECScatterChart);

export type ECScatterChartProps = JsxProps<ECOptionElement> &
    ScatterSeriesOption;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-scatter-chart': ECScatterChartProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-scatter-chart': ECScatterChartProps;
            }
        }
    }
}
