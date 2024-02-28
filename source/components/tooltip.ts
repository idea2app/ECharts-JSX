import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { TooltipComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-tooltip',
    class ECTooltipElement extends ECOptionElement {}
);
use(TooltipComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-tooltip': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['tooltip']>;
        }
    }
}
