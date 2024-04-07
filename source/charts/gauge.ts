import { JsxProps } from 'dom-renderer';
import { GaugeSeriesOption } from 'echarts';
import { GaugeChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(GaugeChart);

export class ECGaugeChart extends ECOptionElement {}

globalThis.customElements?.define('ec-gauge-chart', ECGaugeChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-gauge-chart': JsxProps<ECOptionElement> & GaugeSeriesOption;
        }
    }
}
