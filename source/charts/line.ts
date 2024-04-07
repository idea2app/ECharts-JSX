import { JsxProps } from 'dom-renderer';
import { LineSeriesOption } from 'echarts';
import { LineChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(LineChart);

export class ECLineChart extends ECOptionElement {}

globalThis.customElements?.define('ec-line-chart', ECLineChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-line-chart': JsxProps<ECOptionElement> & LineSeriesOption;
        }
    }
}
