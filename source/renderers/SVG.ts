import { JsxProps } from 'dom-renderer';
import { use } from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import {
    EChartsElement,
    EChartsElementEventHandler,
    EChartsElementProps
} from './core';

use(SVGRenderer);

export class ECSVGRenderer extends EChartsElement {}

globalThis.customElements?.define('ec-svg-renderer', ECSVGRenderer);

export type ECSVGRendererProps = Omit<
    JsxProps<EChartsElement>,
    keyof EChartsElementEventHandler
> &
    EChartsElementProps;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-svg-renderer': ECSVGRendererProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-svg-renderer': ECSVGRendererProps;
            }
        }
    }
}
