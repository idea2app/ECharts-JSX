import {
    HTMLAttributes,
    PropsWithChildren,
    Children,
    PureComponent,
    isValidElement
} from 'react';
import { SeriesOption, EChartsType, init } from 'echarts';

import { Title, Series, XAxis, YAxis, Legend, Tooltip } from './components';

export * from './components';

export type ECBasicOption = Parameters<EChartsType['setOption']>[0];

export type EChartsProps = HTMLAttributes<HTMLDivElement>;

export class ECharts extends PureComponent<EChartsProps> {
    core?: EChartsType;

    init = (root: HTMLDivElement | null) => root && (this.core = init(root));

    componentDidMount() {
        const { children } = this.props,
            series: SeriesOption[] = [];

        const options = Children.toArray(children).map(node => {
            if (!isValidElement<PropsWithChildren<{}>>(node)) return;

            const { children, ...props } = node.props;

            switch (node.type) {
                case Title:
                    return {
                        title: { ...props, text: children }
                    } as ECBasicOption;
                case Legend:
                    return { legend: props } as ECBasicOption;
                case Tooltip:
                    return { tooltip: props } as ECBasicOption;
                case Series:
                    series.push(props);
                    break;
                case XAxis:
                    return { xAxis: node.props } as ECBasicOption;
                case YAxis:
                    return { yAxis: node.props } as ECBasicOption;
            }
        });

        this.core?.setOption({
            ...options.reduce((sum, item) => ({ ...sum, ...item }), {}),
            series
        });
    }

    componentDidUpdate() {
        this.componentDidMount();
    }

    render() {
        const { children, style, ...props } = this.props;

        return (
            <div
                {...props}
                ref={this.init}
                style={{ minHeight: '50vh', ...style }}
            />
        );
    }
}
