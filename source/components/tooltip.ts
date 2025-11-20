import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { TooltipComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(TooltipComponent);

export class ECTooltipComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-tooltip', ECTooltipComponent);

export type ECTooltipComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['tooltip']>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-tooltip': ECTooltipComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-tooltip': ECTooltipComponentProps;
            }
        }
    }
}
