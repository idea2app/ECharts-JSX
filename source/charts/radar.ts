import { JsxProps } from 'dom-renderer';
import { RadarSeriesOption } from 'echarts';
import { RadarChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(RadarChart);

export class ECRadarChart extends ECOptionElement {}

globalThis.customElements?.define('ec-radar-chart', ECRadarChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-radar-chart': JsxProps<ECOptionElement> & RadarSeriesOption;
        }
    }
}
