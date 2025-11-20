import { JsxProps } from 'dom-renderer';
import { FunnelSeriesOption } from 'echarts';
import { FunnelChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(FunnelChart);

export class ECFunnelChart extends ECOptionElement {}

globalThis.customElements?.define('ec-funnel-chart', ECFunnelChart);

export type ECFunnelChartProps = JsxProps<ECOptionElement> & FunnelSeriesOption;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-funnel-chart': ECFunnelChartProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-funnel-chart': ECFunnelChartProps;
            }
        }
    }
}
