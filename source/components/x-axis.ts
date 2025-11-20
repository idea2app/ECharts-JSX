import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { GridComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(GridComponent);

export class ECXAxisComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-x-axis', ECXAxisComponent);

export type ECXAxisComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['xAxis']>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-x-axis': ECXAxisComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-x-axis': ECXAxisComponentProps;
            }
        }
    }
}
