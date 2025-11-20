import { JsxProps } from 'dom-renderer';
import { MapSeriesOption } from 'echarts';
import { MapChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(MapChart);

export class ECMapChart extends ECOptionElement {}

globalThis.customElements?.define('ec-map-chart', ECMapChart);

export type ECMapChartProps = JsxProps<ECOptionElement> & MapSeriesOption;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-map-chart': ECMapChartProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-map-chart': ECMapChartProps;
            }
        }
    }
}
