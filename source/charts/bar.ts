import { JsxProps } from 'dom-renderer';
import { BarSeriesOption } from 'echarts';
import { BarChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-bar-chart',
    class ECBarElement extends ECOptionElement {}
);
use(BarChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-bar-chart': JsxProps<ECOptionElement> & BarSeriesOption;
        }
    }
}
