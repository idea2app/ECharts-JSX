import {
    HTMLAttributes,
    PropsWithChildren,
    Children,
    PureComponent,
    isValidElement
} from 'react';
import { EChartsType, use, init } from 'echarts/core';

import { EC } from './components';

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

        const options = Children.toArray(this.props.children).map(node => {
            if (!isValidElement<PropsWithChildren<{}>>(node)) return;

            const { type, props } = node;

            return (type as EC).optionOf(props);
        });
        const option = options.reduce((sum, item) => {
            const [key, value] = Object.entries(item)[0];

            if (!Array.isArray(value)) return { ...sum, ...item };

            ((sum[key] ||= []) as any[]).push(...value);

            return sum;
        }, {});

        this.core?.setOption(option);
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
