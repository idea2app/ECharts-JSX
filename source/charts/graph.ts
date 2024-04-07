import { JsxProps } from 'dom-renderer';
import { GraphSeriesOption } from 'echarts';
import { GraphChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(GraphChart);

export class ECGraphChart extends ECOptionElement {}

globalThis.customElements?.define('ec-graph-chart', ECGraphChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-graph-chart': JsxProps<ECOptionElement> & GraphSeriesOption;
        }
    }
}
