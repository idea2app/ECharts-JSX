import { JsxProps } from 'dom-renderer';
import { CandlestickSeriesOption } from 'echarts';
import { CandlestickChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(CandlestickChart);

export class ECCandlestickChart extends ECOptionElement {}

globalThis.customElements?.define('ec-candlestick-chart', ECCandlestickChart);

export type ECCandlestickChartProps = JsxProps<ECOptionElement> &
    CandlestickSeriesOption;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-candlestick-chart': ECCandlestickChartProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-candlestick-chart': ECCandlestickChartProps;
            }
        }
    }
}
