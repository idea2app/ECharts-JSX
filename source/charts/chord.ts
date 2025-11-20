import { JsxProps } from 'dom-renderer';
import { ChordSeriesOption } from 'echarts';
import { ChordChart } from 'echarts/charts';
import { use } from 'echarts/core';

import { ECOptionElement } from '../Option';

use(ChordChart);

export class ECChordChart extends ECOptionElement {}

globalThis.customElements?.define('ec-chord-chart', ECChordChart);

export type ECChordChartProps = JsxProps<ECOptionElement> & ChordSeriesOption;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            /**
             * @since `echarts@6`
             * @see {@link https://echarts.apache.org/handbook/zh/basics/release-note/v6-feature/#4.-%E6%96%B0%E5%A2%9E%E5%92%8C%E5%BC%A6%E5%9B%BE}
             */
            'ec-chord-chart': ECChordChartProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                /**
                 * @since `echarts@6`
                 * @see {@link https://echarts.apache.org/handbook/zh/basics/release-note/v6-feature/#4.-%E6%96%B0%E5%A2%9E%E5%92%8C%E5%BC%A6%E5%9B%BE}
                 */
                'ec-chord-chart': ECChordChartProps;
            }
        }
    }
}
