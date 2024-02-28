import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { DataZoomComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-data-zoom',
    class ECDataZoomElement extends ECOptionElement {}
);
use(DataZoomComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-data-zoom': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['dataZoom']>;
        }
    }
}
