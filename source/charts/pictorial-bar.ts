import { JsxProps } from 'dom-renderer';
import { PictorialBarSeriesOption } from 'echarts';
import { PictorialBarChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(PictorialBarChart);

export class ECPictorialBarChart extends ECOptionElement {}

globalThis.customElements?.define(
    'ec-pictorial-bar-chart',
    ECPictorialBarChart
);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-pictorial-bar-chart': JsxProps<ECOptionElement> &
                PictorialBarSeriesOption;
        }
    }
}
