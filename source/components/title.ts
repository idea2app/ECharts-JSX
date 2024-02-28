import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { TitleComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-title',
    class ECTitleElement extends ECOptionElement {}
);
use(TitleComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-title': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['title']>;
        }
    }
}
