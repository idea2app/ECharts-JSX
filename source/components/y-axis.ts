import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { GridComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(GridComponent);

export class ECYAxisComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-y-axis', ECYAxisComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-y-axis': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['yAxis']>;
        }
    }
}
