import { JsxProps } from 'dom-renderer';
import { LineSeriesOption } from 'echarts';
import { LineChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-line-chart',
    class ECLineElement extends ECOptionElement {}
);
use(LineChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-line-chart': JsxProps<ECOptionElement> & LineSeriesOption;
        }
    }
}
