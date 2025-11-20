import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { LegendComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(LegendComponent);

export class ECLegendComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-legend', ECLegendComponent);

export type ECLegendComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['legend']>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-legend': ECLegendComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-legend': ECLegendComponentProps;
            }
        }
    }
}
