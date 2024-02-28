import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { BrushComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-brush',
    class ECBrushElement extends ECOptionElement {}
);
use(BrushComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-brush': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['brush']>;
        }
    }
}
