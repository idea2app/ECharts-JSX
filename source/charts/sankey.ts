import { JsxProps } from 'dom-renderer';
import { SankeySeriesOption } from 'echarts';
import { SankeyChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(SankeyChart);

export class ECSankeyChart extends ECOptionElement {}

globalThis.customElements?.define('ec-sankey-chart', ECSankeyChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-sankey-chart': JsxProps<ECOptionElement> & SankeySeriesOption;
        }
    }
}
