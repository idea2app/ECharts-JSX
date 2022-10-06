# ECharts JSX

A real [JSX][1] wrapper for [ECharts][2] based on [TypeScript][3]

[![CI & CD](https://github.com/idea2app/ECharts-JSX/actions/workflows/main.yml/badge.svg)][4]

[![NPM](https://nodei.co/npm/echarts-jsx.png?downloads=true&downloadRank=true&stars=true)][5]

## Features

-   [x] All kinds of options can be write in **JSX syntax**
    -   [x] Line chart
    -   [x] Scatter chart
    -   [x] Bar chart
    -   [x] Candle Stick chart
    -   [x] Pie chart
    -   [x] Radar chart
-   [x] Async-load required modules automatically

## Quick start

### Installation

```shell
npm i echarts-jsx react react-dom
```

### Simple example

Origin: [ECharts official example][6]

[![Edit ECharts-JSX-demo](https://codesandbox.io/static/img/play-codesandbox.svg)][7]

```tsx
import { render } from 'react-dom';
import {
    CanvasCharts,
    Title,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
    BarSeries
} from 'echarts-jsx';

render(
    <CanvasCharts>
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

        <BarSeries name="sales" data={[5, 20, 36, 10, 10, 20]} />
    </CanvasCharts>,
    document.body
);
```

## Inspired by

1. https://recharts.org/
2. https://github.com/somonus/react-echarts
3. https://github.com/idea2app/ECharts-model
4. https://codesandbox.io/s/echarts-react-yoxstm

## User cases

1. [China Open-source Map](https://test.kaiyuanshe.cn/organization/)

[1]: https://facebook.github.io/jsx/
[2]: https://echarts.apache.org/
[3]: https://www.typescriptlang.org/
[4]: https://github.com/idea2app/ECharts-JSX/actions/workflows/main.yml
[5]: https://nodei.co/npm/echarts-jsx/
[6]: https://echarts.apache.org/handbook/en/get-started/
[7]: https://codesandbox.io/s/echarts-jsx-demo-bouwsf?autoresize=1&fontsize=14&module=%2Fsrc%2FBar.tsx&theme=dark
