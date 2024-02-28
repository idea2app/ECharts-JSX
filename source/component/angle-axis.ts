import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-angle-axis',
    class ECAngleAxisElement extends ECOptionElement {}
);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-angle-axis': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['angleAxis']>;
        }
    }
}
