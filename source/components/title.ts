import { JsxProps } from 'dom-renderer';
import { EChartsOption } from 'echarts';
import { TitleComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { PickSingle } from 'web-utility';

import { ECOptionElement } from '../Option';

use(TitleComponent);

export class ECTitleComponent extends ECOptionElement {}

globalThis.customElements?.define('ec-title', ECTitleComponent);

export type ECTitleComponentProps = JsxProps<ECOptionElement> &
    PickSingle<EChartsOption['title']>;

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ec-title': ECTitleComponentProps;
        }
    }
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'ec-title': ECTitleComponentProps;
            }
        }
    }
}
