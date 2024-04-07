import { JsxProps } from 'dom-renderer';
import { BoxplotSeriesOption } from 'echarts';
import { BoxplotChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(BoxplotChart);

export class ECBoxplotChart extends ECOptionElement {}

globalThis.customElements?.define('ec-boxplot-chart', ECBoxplotChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-boxplot-chart': JsxProps<ECOptionElement> & BoxplotSeriesOption;
        }
    }
}
