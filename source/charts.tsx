import { groupBy } from 'web-utility';
import { debounce } from 'lodash';
import {
    HTMLAttributes,
    PropsWithChildren,
    Children,
    FC,
    PureComponent,
    isValidElement
} from 'react';
import { ElementEvent, EChartsType, use, init } from 'echarts/core';

import {
    ECBasicOption,
    ECExtensions,
    EventHandler,
    EventHandlerProps
} from './utility';

export interface EC<T = {}> extends FC<T> {
    optionOf: (props: PropsWithChildren<T>) => ECBasicOption;
    loadModule?: () => Promise<ECExtensions>;
}

type ContainerProps = PropsWithChildren<
    Pick<
        HTMLAttributes<HTMLDivElement>,
        'className' | 'style' | 'hidden' | 'tabIndex'
    >
>;
export type EChartsProps = ECBasicOption & ContainerProps;

interface State {
    imported?: boolean;
}

export abstract class ECharts extends PureComponent<EChartsProps, State> {
    state: Readonly<State> = {};

    core?: EChartsType;

    protected eventMap: Partial<Record<ElementEvent['type'], EventHandler[]>> =
        {};

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

    resize = debounce(() =>
        this.core!.resize({
            animation: { easing: 'linear', duration: 250 }
        })
    );

    protected boot = (root: HTMLElement | null) => {
        if (!root || this.core) return;

        this.core = init(root);

        globalThis.addEventListener?.('resize', this.resize);
    };

    componentWillUnmount() {
        this.core?.dispose();
        this.core = undefined;

        globalThis.removeEventListener?.('resize', this.resize);
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

    protected clearEvents() {
        for (const event in this.eventMap) this.core?.off(event);

        this.eventMap = {};
    }

    protected dispatchEvents =
        (handlers: EventHandler[]): EventHandler =>
        data => {
            for (const handler of handlers) handler(data);
        };

    protected registerEvents() {
        for (const event in this.eventMap) {
            const name = event as ElementEvent['type'];

            this.core?.on<ECharts, ElementEvent['type']>(
                name,
                this.dispatchEvents(this.eventMap[name]!)
            );
        }
    }

    protected pickHandlers(
        type: string,
        index: number,
        props: PropsWithChildren<EventHandlerProps>
    ) {
        const propsMap: ECBasicOption = {};

        for (const [key, value] of Object.entries(props)) {
            const [_, event] = key.match(/^on([A-Z]\w+)/) || [];

            if (!event || typeof value !== 'function') {
                propsMap[key] = value;
                continue;
            }
            const name = event.toLowerCase() as ElementEvent['type'];

            (this.eventMap[name] ||= []).push(function (this: any, ...data) {
                const [{ componentType, componentIndex }] = data;

                if (type === componentType && index === componentIndex)
                    (value as EventHandler).apply(this, data);
            });
        }
        return propsMap;
    }

    componentDidUpdate() {
        if (!this.state.imported) return;

        this.clearEvents();

        const { splittedProps, props } = this;

        const options = Children.toArray(props.children)
            .map(node => {
                if (!isValidElement<PropsWithChildren<{}>>(node)) return [];

                const { type, props } = node;

                return Object.entries((type as EC).optionOf(props));
            })
            .flat() as [string, ECBasicOption & EventHandlerProps][];

        const optionGroup = groupBy(options, ([key]) => key);

        const option = Object.fromEntries(
            Object.entries(optionGroup).map(([key, list]) => [
                key,
                list.map(([{}, props], index) =>
                    this.pickHandlers(key, index, props)
                )
            ])
        );
        this.registerEvents();

        this.core?.setOption({ ...splittedProps.charts, ...option });
    }

    render() {
        const { splittedProps, state } = this;

        return state.imported ? (
            <div
                {...splittedProps.container}
                ref={this.boot}
                style={{
                    width: '100%',
                    minHeight: '50vh',
                    ...splittedProps.container.style
                }}
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
