import { JsxProps } from 'dom-renderer';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import {
    EChartsElement,
    EChartsElementEventHandler,
    EChartsElementProps
} from './core';

use([CanvasRenderer]);

export class ECCanvasElement extends EChartsElement {}

customElements.define('ec-canvas-chart', ECCanvasElement);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-canvas-chart': Omit<
                JsxProps<EChartsElement>,
                keyof EChartsElementEventHandler
            > &
                EChartsElementProps;
        }
    }
}
