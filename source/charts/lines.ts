import { JsxProps } from 'dom-renderer';
import { LinesSeriesOption } from 'echarts';
import { LinesChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(LinesChart);

export class ECLinesChart extends ECOptionElement {}

globalThis.customElements?.define('ec-lines-chart', ECLinesChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-lines-chart': JsxProps<ECOptionElement> & LinesSeriesOption;
        }
    }
}
