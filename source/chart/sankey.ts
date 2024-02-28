import { JsxProps } from 'dom-renderer';
import { SankeySeriesOption } from 'echarts';
import { SankeyChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-sankey-chart',
    class ECSankeyElement extends ECOptionElement {}
);
use(SankeyChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-sankey-chart': JsxProps<ECOptionElement> & SankeySeriesOption;
        }
    }
}
