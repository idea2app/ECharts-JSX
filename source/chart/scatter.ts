import { JsxProps } from 'dom-renderer';
import { ScatterSeriesOption } from 'echarts';
import { ScatterChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-scatter-chart',
    class ECScatterElement extends ECOptionElement {}
);
use(ScatterChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-scatter-chart': JsxProps<ECOptionElement> & ScatterSeriesOption;
        }
    }
}
