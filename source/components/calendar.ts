import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { CalendarComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(CalendarComponent);

export class ECCalendarComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-calendar', ECCalendarComponent);

export type ECCalendarComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['calendar']>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-calendar': ECCalendarComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-calendar': ECCalendarComponentProps;
            }
        }
    }
}
