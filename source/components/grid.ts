import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { GridComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(GridComponent);

export class ECGridComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-grid', ECGridComponent);

export type ECGridComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['grid']>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-grid': ECGridComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-grid': ECGridComponentProps;
            }
        }
    }
}
