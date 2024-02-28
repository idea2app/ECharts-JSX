import { JsxProps } from 'dom-renderer';
import { GaugeSeriesOption } from 'echarts';
import { GaugeChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-gauge-chart',
    class ECGaugeElement extends ECOptionElement {}
);
use(GaugeChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-gauge-chart': JsxProps<ECOptionElement> & GaugeSeriesOption;
        }
    }
}
