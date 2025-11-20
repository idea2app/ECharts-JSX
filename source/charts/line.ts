import { JsxProps } from 'dom-renderer';
import { LineSeriesOption } from 'echarts';
import { LineChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(LineChart);

export class ECLineChart extends ECOptionElement {}

globalThis.customElements?.define('ec-line-chart', ECLineChart);

export type ECLineChartProps = JsxProps<ECOptionElement> & LineSeriesOption;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-line-chart': ECLineChartProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-line-chart': ECLineChartProps;
            }
        }
    }
}
