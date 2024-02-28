import { JsxProps } from 'dom-renderer';
import { CustomSeriesOption } from 'echarts';
import { CustomChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-custom-chart',
    class ECCustomElement extends ECOptionElement {}
);
use(CustomChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-custom-chart': JsxProps<ECOptionElement> & CustomSeriesOption;
        }
    }
}
