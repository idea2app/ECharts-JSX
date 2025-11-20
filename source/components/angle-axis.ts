import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

export class ECAngleAxisComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-angle-axis', ECAngleAxisComponent);

export type ECAngleAxisComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['angleAxis']>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-angle-axis': ECAngleAxisComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-angle-axis': ECAngleAxisComponentProps;
            }
        }
    }
}
