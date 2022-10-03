# ECharts JSX

A real [JSX][1] wrapper for [ECharts][2] based on [TypeScript][3]

[![CI & CD](https://github.com/idea2app/ECharts-JSX/actions/workflows/main.yml/badge.svg)][4]

[![NPM](https://nodei.co/npm/echarts-jsx.png?downloads=true&downloadRank=true&stars=true)][5]

## Quick start

### Installation

```shell
npm i echarts-jsx react react-dom
```

### Simple example

Origin: [ECharts official example][6]

[![Edit ECharts-React](https://codesandbox.io/static/img/play-codesandbox.svg)][7]

```tsx
import { render } from 'react-dom';
import {
    ECharts,
    Title,
    Legend,
    Tooltip,
    Series,
    XAxis,
    YAxis
} from 'echarts-jsx';

render(
    <ECharts>
        <Title>ECharts Getting Started Example</Title>

        <Legend data={['sales']} />

        <Tooltip />

        <XAxis
            data={[
                'Shirts',
                'Cardigans',
                'Chiffons',
                'Pants',
                'Heels',
                'Socks'
            ]}
        />
        <YAxis />

        <Series name="sales" type="bar" data={[5, 20, 36, 10, 10, 20]} />
    </ECharts>,
    document.body
);
```

## Inspired by

1. https://recharts.org/
2. https://github.com/somonus/react-echarts
3. https://github.com/idea2app/ECharts-model

[1]: https://facebook.github.io/jsx/
[2]: https://echarts.apache.org/
[3]: https://www.typescriptlang.org/
[4]: https://github.com/idea2app/ECharts-JSX/actions/workflows/main.yml
[5]: https://nodei.co/npm/echarts-jsx/
[6]: https://echarts.apache.org/handbook/en/get-started/
[7]: https://codesandbox.io/s/echarts-react-yoxstm?autoresize=1&fontsize=14&theme=dark
