import { JsxProps } from 'dom-renderer';
import { MapSeriesOption } from 'echarts';
import { MapChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-map-chart',
    class ECMapElement extends ECOptionElement {}
);
use(MapChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-map-chart': JsxProps<ECOptionElement> & MapSeriesOption;
        }
    }
}
