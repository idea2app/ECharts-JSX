import { JsxProps } from 'dom-renderer';
import { BoxplotSeriesOption } from 'echarts';
import { BoxplotChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-boxplot-chart',
    class ECBoxplotElement extends ECOptionElement {}
);
use(BoxplotChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-boxplot-chart': JsxProps<ECOptionElement> & BoxplotSeriesOption;
        }
    }
}
