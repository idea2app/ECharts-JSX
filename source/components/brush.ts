import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { BrushComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(BrushComponent);

export class ECBrushComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-brush', ECBrushComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-brush': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['brush']>;
        }
    }
}
