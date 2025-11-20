import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { GeoComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(GeoComponent);

export class ECGeoComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-geo', ECGeoComponent);

export type ECGeoComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['geo']>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-geo': ECGeoComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-geo': ECGeoComponentProps;
            }
        }
    }
}
