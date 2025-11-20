import { JsxProps } from 'dom-renderer';
import { SunburstSeriesOption } from 'echarts';
import { SunburstChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(SunburstChart);

export class ECSunburstChart extends ECOptionElement {}

globalThis.customElements?.define('ec-sunburst-chart', ECSunburstChart);

export type ECSunburstChartProps = JsxProps<ECOptionElement> &
    SunburstSeriesOption;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-sunburst-chart': ECSunburstChartProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-sunburst-chart': ECSunburstChartProps;
            }
        }
    }
}
