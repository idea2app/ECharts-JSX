import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { ToolboxComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(ToolboxComponent);

export class ECToolboxComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-toolbox', ECToolboxComponent);

export type ECToolboxComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['toolbox']>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-toolbox': ECToolboxComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-toolbox': ECToolboxComponentProps;
            }
        }
    }
}
