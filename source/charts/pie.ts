import { JsxProps } from 'dom-renderer';
import { PieSeriesOption } from 'echarts';
import { PieChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(PieChart);

export class ECPieChart extends ECOptionElement {}

globalThis.customElements?.define('ec-pie-chart', ECPieChart);

export type ECPieChartProps = JsxProps<ECOptionElement> & PieSeriesOption;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-pie-chart': ECPieChartProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-pie-chart': ECPieChartProps;
            }
        }
    }
}
