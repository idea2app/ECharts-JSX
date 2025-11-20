import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { RadarComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(RadarComponent);

export class ECRadarComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-radar', ECRadarComponent);

export type ECRadarComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['radar']>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-radar': ECRadarComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-radar': ECRadarComponentProps;
            }
        }
    }
}
