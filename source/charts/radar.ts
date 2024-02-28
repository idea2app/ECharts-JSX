import { JsxProps } from 'dom-renderer';
import { RadarSeriesOption } from 'echarts';
import { RadarChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-radar-chart',
    class ECRadarElement extends ECOptionElement {}
);
use(RadarChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-radar-chart': JsxProps<ECOptionElement> & RadarSeriesOption;
        }
    }
}
