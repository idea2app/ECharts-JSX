import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { VisualMapComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-visual-map',
    class ECVisualMapElement extends ECOptionElement {}
);
use(VisualMapComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-visual-map': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['visualMap']>;
        }
    }
}
