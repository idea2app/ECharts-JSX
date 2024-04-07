import { JsxProps } from 'dom-renderer';
import { TreeSeriesOption } from 'echarts';
import { TreeChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(TreeChart);

export class ECTreeChart extends ECOptionElement {}

globalThis.customElements?.define('ec-tree-chart', ECTreeChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-tree-chart': JsxProps<ECOptionElement> & TreeSeriesOption;
        }
    }
}
