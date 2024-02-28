import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { ParallelComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-parallel',
    class ECParallelElement extends ECOptionElement {}
);
use(ParallelComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-parallel': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['parallel']>;
        }
    }
}
