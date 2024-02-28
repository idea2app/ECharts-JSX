import { JsxProps } from 'dom-renderer';
import { GraphSeriesOption } from 'echarts';
import { GraphChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-graph-chart',
    class ECGraphElement extends ECOptionElement {}
);
use(GraphChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-graph-chart': JsxProps<ECOptionElement> & GraphSeriesOption;
        }
    }
}
