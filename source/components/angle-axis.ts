import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

export class ECAngleAxisComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-angle-axis', ECAngleAxisComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-angle-axis': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['angleAxis']>;
        }
    }
}
