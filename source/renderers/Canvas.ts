import { JsxProps } from 'dom-renderer';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import {
    EChartsElement,
    EChartsElementEventHandler,
    EChartsElementProps
} from './core';

use(CanvasRenderer);

export class ECCanvasRenderer extends EChartsElement {}

customElements.define('ec-canvas-renderer', ECCanvasRenderer);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-canvas-renderer': Omit<
                JsxProps<EChartsElement>,
                keyof EChartsElementEventHandler
            > &
                EChartsElementProps;
        }
    }
}
