import { JsxProps } from 'dom-renderer';
import { PieSeriesOption } from 'echarts';
import { PieChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-pie-chart',
    class ECPieElement extends ECOptionElement {}
);
use(PieChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-pie-chart': JsxProps<ECOptionElement> & PieSeriesOption;
        }
    }
}
