import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { GraphicComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-graphic',
    class ECGraphicElement extends ECOptionElement {}
);
use(GraphicComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-graphic': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['graphic']>;
        }
    }
}
