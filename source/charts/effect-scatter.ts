import { JsxProps } from 'dom-renderer';
import { EffectScatterSeriesOption } from 'echarts';
import { EffectScatterChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-effect-scatter-chart',
    class ECEffectScatterElement extends ECOptionElement {}
);
use(EffectScatterChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-effect-scatter-chart': JsxProps<ECOptionElement> &
                EffectScatterSeriesOption;
        }
    }
}
