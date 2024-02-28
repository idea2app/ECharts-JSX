import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { AxisPointerComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-axis-pointer',
    class ECAxisPointerElement extends ECOptionElement {}
);
use(AxisPointerComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-axis-pointer': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['axisPointer']>;
        }
    }
}
