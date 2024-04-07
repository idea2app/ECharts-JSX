import { JsxProps } from 'dom-renderer';
import { ParallelSeriesOption } from 'echarts';
import { ParallelChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(ParallelChart);

export class ECParallelChart extends ECOptionElement {}

globalThis.customElements?.define('ec-parallel-chart', ECParallelChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-parallel-chart': JsxProps<ECOptionElement> &
                ParallelSeriesOption;
        }
    }
}
