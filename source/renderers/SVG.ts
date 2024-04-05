import { JsxProps } from 'dom-renderer';
import { use } from 'echarts/core';
import { SVGRenderer } from 'echarts/renderers';
import {
    EChartsElement,
    EChartsElementEventHandler,
    EChartsElementProps
} from './core';

use([SVGRenderer]);

export class ECSVGElement extends EChartsElement {}

customElements.define('ec-svg-chart', ECSVGElement);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-svg-chart': Omit<
                JsxProps<EChartsElement>,
                keyof EChartsElementEventHandler
            > &
                EChartsElementProps;
        }
    }
}
