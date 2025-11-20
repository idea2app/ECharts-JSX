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

globalThis.customElements?.define('ec-canvas-renderer', ECCanvasRenderer);

export type ECCanvasRendererProps = Omit<
    JsxProps<EChartsElement>,
    keyof EChartsElementEventHandler
> &
    EChartsElementProps;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-canvas-renderer': ECCanvasRendererProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-canvas-renderer': ECCanvasRendererProps;
            }
        }
    }
}
