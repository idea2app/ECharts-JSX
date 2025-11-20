import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { TimelineComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(TimelineComponent);

export class ECTimelineComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-timeline', ECTimelineComponent);

export type ECTimelineComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['timeline']>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-timeline': ECTimelineComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-timeline': ECTimelineComponentProps;
            }
        }
    }
}
