# ECharts JSX

A real [JSX][1] wrapper for [ECharts][2] based on [TypeScript][3] & [Web components][4]

[![NPM Dependency](https://img.shields.io/librariesio/github/idea2app/ECharts-JSX.svg)][5]
[![CI & CD](https://github.com/idea2app/ECharts-JSX/actions/workflows/main.yml/badge.svg)][6]
[![](https://raw.githubusercontent.com/sindresorhus/awesome/main/media/mentioned-badge.svg)][7]

[![NPM](https://nodei.co/npm/echarts-jsx.png?downloads=true&downloadRank=true&stars=true)][8]

## Features

-   [x] All kinds of options & event handlers can be write in **JSX syntax**
-   [x] Async-load required modules automatically

## Versions

| SemVer |  branch  |    status    | component API  |
| :----: | :------: | :----------: | :------------: |
| `>=1`  |  `main`  | ✅developing | Web components |
|  `<1`  | `master` | ❌deprecated |     React      |

## Quick start

### Installation

```shell
npm i echarts-jsx
```

### Simple example

Origin: [ECharts official example][9]

[![Edit ECharts-JSX-demo](https://codesandbox.io/static/img/play-codesandbox.svg)][10]

```tsx
import { render } from 'react-dom';
import 'echarts-jsx';

render(
    <ec-chart
        type="canvas"
        theme="dark"
        style={{ width: '100%', height: '75vh' }}
    >
        <ec-title text="ECharts Getting Started Example" />

        <ec-legend data={['sales']} />

        <ec-tooltip />

        <ec-x-axis
            data={[
                'Shirts',
                'Cardigans',
                'Chiffons',
                'Pants',
                'Heels',
                'Socks'
            ]}
        />
        <ec-y-axis />

        <ec-series
            type="bar"
            name="sales"
            data={[5, 20, 36, 10, 10, 20]}
            onClick={console.log}
        />
    </ec-chart>,
    document.body
);
```

## Inspired by

1. https://recharts.org/
2. https://github.com/somonus/react-echarts
3. https://github.com/idea2app/ECharts-model
4. https://codesandbox.io/s/echarts-react-yoxstm

## User cases

1. [China Open-source Map](https://kaiyuanshe.cn/organization/)

[1]: https://facebook.github.io/jsx/
[2]: https://echarts.apache.org/
[3]: https://www.typescriptlang.org/
[4]: https://www.webcomponents.org/
[5]: https://libraries.io/npm/echarts-jsx
[6]: https://github.com/idea2app/ECharts-JSX/actions/workflows/main.yml
[7]: https://github.com/ecomfe/awesome-echarts
[8]: https://nodei.co/npm/echarts-jsx/
[9]: https://echarts.apache.org/handbook/en/get-started/
[10]: https://codesandbox.io/p/devbox/5lknyg?migrateFrom=bouwsf&embed=1&file=%2Fsrc%2Fbar.tsx&showConsole=true
