import {
    HTMLAttributes,
    PropsWithChildren,
    Children,
    PureComponent,
    isValidElement
} from 'react';
import type { SeriesOption } from 'echarts';
import { EChartsType, use, init } from 'echarts/core';

import { EC, Series } from './components';

export * from './components';

export type EChartsProps = HTMLAttributes<HTMLDivElement>;

interface State {
    imported?: boolean;
}

export abstract class ECharts extends PureComponent<EChartsProps, State> {
    state: Readonly<State> = {};

    core?: EChartsType;

    async componentDidMount() {
        const { children } = this.props;

        const modules = await Promise.all(
            Children.toArray(children).map(
                node =>
                    isValidElement(node) &&
                    typeof node.type === 'function' &&
                    (node.type as EC).loadModule()
            )
        );
        use(modules.flat().filter(Boolean));

        this.setState({ imported: true });
    }

    componentDidUpdate() {
        if (!this.state.imported) return;

        const { children } = this.props,
            series: SeriesOption[] = [];

        const options = Children.toArray(children).map(node => {
            if (!isValidElement<PropsWithChildren<{}>>(node)) return;

            const { type, props } = node;

            switch (type) {
                case Series: {
                    const { children, ...option } = props;

                    series.push(option);
                    break;
                }
                default:
                    return (type as EC).optionOf?.(props);
            }
        });

        this.core?.setOption({
            ...options.reduce((sum, item) => ({ ...sum, ...item }), {}),
            series
        });
    }

    render() {
        const { children, style, ...props } = this.props;

        return this.state.imported ? (
            <div
                {...props}
                ref={root => root && (this.core = init(root))}
                style={{ minHeight: '50vh', ...style }}
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
