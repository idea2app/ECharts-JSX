import { JsxProps } from 'dom-renderer';
import { TreemapSeriesOption } from 'echarts';
import { TreemapChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(TreemapChart);

export class ECTreemapChart extends ECOptionElement {}

globalThis.customElements?.define('ec-treemap-chart', ECTreemapChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-treemap-chart': JsxProps<ECOptionElement> & TreemapSeriesOption;
        }
    }
}
