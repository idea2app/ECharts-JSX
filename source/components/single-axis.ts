import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { SingleAxisComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-single-axis',
    class ECSingleAxisElement extends ECOptionElement {}
);
use(SingleAxisComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-single-axis': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['singleAxis']>;
        }
    }
}
