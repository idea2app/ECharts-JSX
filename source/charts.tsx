import { groupBy } from 'web-utility';
import {
    HTMLAttributes,
    PropsWithChildren,
    Children,
    FC,
    PureComponent,
    isValidElement
} from 'react';
import { EChartsType, use, init } from 'echarts/core';

import { ECBasicOption, ECExtensions } from './utility';

export interface EC<T = {}> extends FC<T> {
    optionOf: (props: PropsWithChildren<T>) => ECBasicOption;
    loadModule?: () => Promise<ECExtensions>;
}

type ContainerProps = Pick<
    HTMLAttributes<HTMLDivElement>,
    'className' | 'style' | 'hidden' | 'tabIndex'
>;
export type EChartsProps = ECBasicOption & ContainerProps;

interface State {
    imported?: boolean;
}

export abstract class ECharts extends PureComponent<EChartsProps, State> {
    state: Readonly<State> = {};

    core?: EChartsType;

    get splittedProps(): {
        container: PropsWithChildren<ContainerProps>;
        charts: ECBasicOption;
    } {
        const { className, style, hidden, tabIndex, children, ...charts } =
            this.props;

        return {
            container: { className, style, hidden, tabIndex, children },
            charts
        };
    }

    async componentDidMount() {
        const { children } = this.props;

        const modules = await Promise.all(
            Children.toArray(children).map(
                node =>
                    isValidElement(node) &&
                    typeof node.type === 'function' &&
                    (node.type as EC).loadModule?.()
            )
        );
        use(modules.flat().filter(Boolean) as ECExtensions);

        this.setState({ imported: true });
    }

    componentDidUpdate() {
        if (!this.state.imported) return;

        const { splittedProps, props } = this;

        const options = Children.toArray(props.children)
            .map(node => {
                if (!isValidElement<PropsWithChildren<{}>>(node)) return [];

                const { type, props } = node;

                return Object.entries((type as EC).optionOf(props));
            })
            .flat();

        this.core?.setOption({
            ...splittedProps.charts,
            ...groupBy(options, ([key]) => key)
        });
    }

    render() {
        const { splittedProps, state } = this;

        return state.imported ? (
            <div
                {...splittedProps.container}
                ref={root => root && (this.core = init(root))}
                style={{ minHeight: '50vh', ...splittedProps.container.style }}
            />
        ) : (
            <></>
        );
    }
}

export class SVGCharts extends ECharts {
    async componentDidMount() {
        const { SVGRenderer } = await import('echarts/renderers');

        use([SVGRenderer]);

        return super.componentDidMount();
    }
}

export class CanvasCharts extends ECharts {
    async componentDidMount() {
        const { CanvasRenderer } = await import('echarts/renderers');

        use([CanvasRenderer]);

        return super.componentDidMount();
    }
}
