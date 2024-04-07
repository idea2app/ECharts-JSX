import { JsxProps } from 'dom-renderer';
import { PieSeriesOption } from 'echarts';
import { PieChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(PieChart);

export class ECPieChart extends ECOptionElement {}

globalThis.customElements?.define('ec-pie-chart', ECPieChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-pie-chart': JsxProps<ECOptionElement> & PieSeriesOption;
        }
    }
}
