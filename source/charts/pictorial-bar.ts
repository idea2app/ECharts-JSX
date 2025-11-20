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
export type ECPictorialBarChartProps = JsxProps<ECOptionElement> &
    PictorialBarSeriesOption;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-pictorial-bar-chart': ECPictorialBarChartProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-pictorial-bar-chart': ECPictorialBarChartProps;
            }
        }
    }
}
