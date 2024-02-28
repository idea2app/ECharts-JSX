import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { GeoComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-geo',
    class ECGeoElement extends ECOptionElement {}
);
use(GeoComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-geo': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['geo']>;
        }
    }
}
