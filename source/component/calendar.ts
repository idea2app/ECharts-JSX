import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { CalendarComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

globalThis.customElements?.define(
    'ec-calendar',
    class ECCalendarElement extends ECOptionElement {}
);
use(CalendarComponent);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-calendar': JsxProps<ECOptionElement> &
                PickSingle<EChartsOption['calendar']>;
        }
    }
}
