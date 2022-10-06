import {
    HTMLAttributes,
    PropsWithChildren,
    Children,
    FC,
    PureComponent,
    isValidElement
} from 'react';
import { EChartsType, use, init } from 'echarts/core';

export type ECBasicOption = Parameters<EChartsType['setOption']>[0];

export type ECExtensions = Parameters<typeof use>[0];

export interface EC<T = {}> extends FC<T> {
    optionOf: (props: PropsWithChildren<T>) => ECBasicOption;
    loadModule?: () => Promise<ECExtensions>;
}

export const optionCreator =
    <T,>(key: string) =>
    ({ children, ...props }: PropsWithChildren<T>) => ({ [key]: props });

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
                    (node.type as EC).loadModule()
            )
        );
        use(modules.flat().filter(Boolean));

        this.setState({ imported: true });
    }

    componentDidUpdate() {
        if (!this.state.imported) return;

        const { splittedProps, props } = this;

        const options = Children.toArray(props.children).map(node => {
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

        this.core?.setOption({ ...splittedProps.charts, ...option });
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
