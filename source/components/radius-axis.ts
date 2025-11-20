import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

export class ECRadiusAxisComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-radius-axis', ECRadiusAxisComponent);

export type ECRadiusAxisComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['radiusAxis']>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-radius-axis': ECRadiusAxisComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-radius-axis': ECRadiusAxisComponentProps;
            }
        }
    }
}
