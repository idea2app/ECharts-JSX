import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { GraphicComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(GraphicComponent);

export class ECGraphicComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-graphic', ECGraphicComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-graphic': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['graphic']>;
        }
    }
}
