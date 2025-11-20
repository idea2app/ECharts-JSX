import { JsxProps } from 'dom-renderer';
import { BarSeriesOption } from 'echarts';
import { BarChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(BarChart);

export class ECBarChart extends ECOptionElement {}

globalThis.customElements?.define('ec-bar-chart', ECBarChart);

export type ECBarChartProps = JsxProps<ECOptionElement> & BarSeriesOption;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-bar-chart': ECBarChartProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-bar-chart': ECBarChartProps;
            }
        }
    }
}
