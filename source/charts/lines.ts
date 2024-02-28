import { JsxProps } from 'dom-renderer';
import { LinesSeriesOption } from 'echarts';
import { LinesChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-lines-chart',
    class ECLinesElement extends ECOptionElement {}
);
use(LinesChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-lines-chart': JsxProps<ECOptionElement> & LinesSeriesOption;
        }
    }
}
