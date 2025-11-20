import { JsxProps } from 'dom-renderer';
import { GaugeSeriesOption } from 'echarts';
import { GaugeChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(GaugeChart);

export class ECGaugeChart extends ECOptionElement {}

globalThis.customElements?.define('ec-gauge-chart', ECGaugeChart);

export type ECGaugeChartProps = JsxProps<ECOptionElement> & GaugeSeriesOption;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-gauge-chart': ECGaugeChartProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-gauge-chart': ECGaugeChartProps;
            }
        }
    }
}
