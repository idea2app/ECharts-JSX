import { JsxProps } from 'dom-renderer';
import { SunburstSeriesOption } from 'echarts';
import { SunburstChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-sunburst-chart',
    class ECSunburstElement extends ECOptionElement {}
);
use(SunburstChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-sunburst-chart': JsxProps<ECOptionElement> &
                SunburstSeriesOption;
        }
    }
}
