import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { PolarComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(PolarComponent);

export class ECPolarComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-polar', ECPolarComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-polar': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['polar']>;
        }
    }
}
