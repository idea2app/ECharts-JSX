import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { DataZoomComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(DataZoomComponent);

export class ECDataZoomComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-data-zoom', ECDataZoomComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-data-zoom': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['dataZoom']>;
        }
    }
}
