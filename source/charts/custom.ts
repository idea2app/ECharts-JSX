import { JsxProps } from 'dom-renderer';
import { CustomSeriesOption } from 'echarts';
import { CustomChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(CustomChart);

export class ECCustomChart extends ECOptionElement {}

globalThis.customElements?.define('ec-custom-chart', ECCustomChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-custom-chart': JsxProps<ECOptionElement> & CustomSeriesOption;
        }
    }
}
