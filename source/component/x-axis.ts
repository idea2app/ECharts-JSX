import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-x-axis',
    class ECXAxisElement extends ECOptionElement {}
);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-x-axis': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['xAxis']>;
        }
    }
}
