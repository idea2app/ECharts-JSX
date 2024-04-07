import { JsxProps } from 'dom-renderer';
import { ThemeRiverSeriesOption } from 'echarts';
import { ThemeRiverChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(ThemeRiverChart);

export class ECThemeRiverChart extends ECOptionElement {}

globalThis.customElements?.define('ec-theme-river-chart', ECThemeRiverChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-theme-river-chart': JsxProps<ECOptionElement> &
                ThemeRiverSeriesOption;
        }
    }
}
