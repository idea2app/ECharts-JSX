import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { VisualMapComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(VisualMapComponent);

export class ECVisualMapComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-visual-map', ECVisualMapComponent);

export type ECVisualMapComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['visualMap']>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-visual-map': ECVisualMapComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-visual-map': ECVisualMapComponentProps;
            }
        }
    }
}
