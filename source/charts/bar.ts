import { JsxProps } from 'dom-renderer';
import { BarSeriesOption } from 'echarts';
import { BarChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(BarChart);

export class ECBarChart extends ECOptionElement {}

globalThis.customElements?.define('ec-bar-chart', ECBarChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-bar-chart': JsxProps<ECOptionElement> & BarSeriesOption;
        }
    }
}
