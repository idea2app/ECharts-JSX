import { JsxProps } from 'dom-renderer';
import { CandlestickSeriesOption } from 'echarts';
import { CandlestickChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-candlestick-chart',
    class ECCandlestickElement extends ECOptionElement {}
);
use(CandlestickChart);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-candlestick-chart': JsxProps<ECOptionElement> &
                CandlestickSeriesOption;
        }
    }
}
