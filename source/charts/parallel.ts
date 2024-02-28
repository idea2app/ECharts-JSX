import { JsxProps } from 'dom-renderer';
import { ParallelSeriesOption } from 'echarts';
import { ParallelChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-parallel-chart',
    class ECParallelElement extends ECOptionElement {}
);
use(ParallelChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-parallel-chart': JsxProps<ECOptionElement> &
                ParallelSeriesOption;
        }
    }
}
