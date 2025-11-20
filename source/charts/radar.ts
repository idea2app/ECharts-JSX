import { JsxProps } from 'dom-renderer';
import { RadarSeriesOption } from 'echarts';
import { RadarChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(RadarChart);

export class ECRadarChart extends ECOptionElement {}

globalThis.customElements?.define('ec-radar-chart', ECRadarChart);

export type ECRadarChartProps = JsxProps<ECOptionElement> & RadarSeriesOption;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-radar-chart': ECRadarChartProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-radar-chart': ECRadarChartProps;
            }
        }
    }
}
