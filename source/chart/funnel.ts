import { JsxProps } from 'dom-renderer';
import { FunnelSeriesOption } from 'echarts';
import { FunnelChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-funnel-chart',
    class ECFunnelElement extends ECOptionElement {}
);
use(FunnelChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-funnel-chart': JsxProps<ECOptionElement> & FunnelSeriesOption;
        }
    }
}
