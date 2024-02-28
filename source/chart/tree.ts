import { JsxProps } from 'dom-renderer';
import { TreeSeriesOption } from 'echarts';
import { TreeChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-tree-chart',
    class ECTreeElement extends ECOptionElement {}
);
use(TreeChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-tree-chart': JsxProps<ECOptionElement> & TreeSeriesOption;
        }
    }
}
