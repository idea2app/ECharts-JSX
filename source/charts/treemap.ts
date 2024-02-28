import { JsxProps } from 'dom-renderer';
import { TreemapSeriesOption } from 'echarts';
import { TreemapChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-treemap-chart',
    class ECTreemapElement extends ECOptionElement {}
);
use(TreemapChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-treemap-chart': JsxProps<ECOptionElement> & TreemapSeriesOption;
        }
    }
}
