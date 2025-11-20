import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { AxisPointerComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(AxisPointerComponent);

export class ECAxisPointerComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-axis-pointer', ECAxisPointerComponent);

export type ECAxisPointerComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['axisPointer']>;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-axis-pointer': ECAxisPointerComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-axis-pointer': ECAxisPointerComponentProps;
            }
        }
    }
}
