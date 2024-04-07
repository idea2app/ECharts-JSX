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

customElements.define('ec-svg-renderer', ECSVGRenderer);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-svg-renderer': Omit<
                JsxProps<EChartsElement>,
                keyof EChartsElementEventHandler
            > &
                EChartsElementProps;
        }
    }
}
