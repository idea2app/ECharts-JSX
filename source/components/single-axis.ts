import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { SingleAxisComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(SingleAxisComponent);

export class ECSingleAxisComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-single-axis', ECSingleAxisComponent);

export type ECSingleAxisComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['singleAxis']>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-single-axis': ECSingleAxisComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-single-axis': ECSingleAxisComponentProps;
            }
        }
    }
}
