import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { TimelineComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-timeline',
    class ECTimelineElement extends ECOptionElement {}
);
use(TimelineComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-timeline': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['timeline']>;
        }
    }
}
