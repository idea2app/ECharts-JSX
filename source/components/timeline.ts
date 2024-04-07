import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { TimelineComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(TimelineComponent);

export class ECTimelineComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-timeline', ECTimelineComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-timeline': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['timeline']>;
        }
    }
}
