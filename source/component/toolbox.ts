import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { ToolboxComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-toolbox',
    class ECToolboxElement extends ECOptionElement {}
);
use(ToolboxComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-toolbox': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['toolbox']>;
        }
    }
}
