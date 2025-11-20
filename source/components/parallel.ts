import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { ParallelComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(ParallelComponent);

export class ECParallelComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-parallel', ECParallelComponent);

export type ECParallelComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['parallel']>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-parallel': ECParallelComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-parallel': ECParallelComponentProps;
            }
        }
    }
}
