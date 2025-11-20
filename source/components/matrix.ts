import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { MatrixComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(MatrixComponent);

export class ECMatrixComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-matrix', ECMatrixComponent);

export type ECMatrixComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['matrix']>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            /**
             * @since `echarts@6`
             * @see {@link https://echarts.apache.org/handbook/zh/basics/release-note/v6-feature/#9.-%E6%96%B0%E5%A2%9E%E7%9F%A9%E9%98%B5%E5%9D%90%E6%A0%87%E7%B3%BB}
             */
            'ec-matrix': ECMatrixComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                /**
                 * @since `echarts@6`
                 * @see {@link https://echarts.apache.org/handbook/zh/basics/release-note/v6-feature/#9.-%E6%96%B0%E5%A2%9E%E7%9F%A9%E9%98%B5%E5%9D%90%E6%A0%87%E7%B3%BB}
                 */
                'ec-matrix': ECMatrixComponentProps;
            }
        }
    }
}
