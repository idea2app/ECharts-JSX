import { JsxProps } from 'dom-renderer';
import { PictorialBarSeriesOption } from 'echarts';
import { PictorialBarChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-pictorial-bar-chart',
    class ECPictorialBarElement extends ECOptionElement {}
);
use(PictorialBarChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-pictorial-bar-chart': JsxProps<ECOptionElement> &
                PictorialBarSeriesOption;
        }
    }
}
