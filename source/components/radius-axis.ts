import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-radius-axis',
    class ECRadiusAxisElement extends ECOptionElement {}
);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-radius-axis': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['radiusAxis']>;
        }
    }
}
