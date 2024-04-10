# ECharts JSX

A real [JSX][1] wrapper for [ECharts][2] based on [TypeScript][3] & [Web components][4]

[![NPM Dependency](https://img.shields.io/librariesio/github/idea2app/ECharts-JSX.svg)][5]
[![CI & CD](https://github.com/idea2app/ECharts-JSX/actions/workflows/main.yml/badge.svg)][6]
[![](https://raw.githubusercontent.com/sindresorhus/awesome/main/media/mentioned-badge.svg)][7]

[![NPM](https://nodei.co/npm/echarts-jsx.png?downloads=true&downloadRank=true&stars=true)][8]

## Features

-   [x] All kinds of options & event handlers can be write in **JSX syntax**
-   [x] **Tree shaking** supported based on ECMAScript 6+ modules

## Versions

| SemVer |  branch  |    status    | component API  |
| :----: | :------: | :----------: | :------------: |
| `>=1`  |  `main`  | ✅developing | Web components |
|  `<1`  | `master` | ❌deprecated |     React      |

## Installation

### Core package

```shell
npm i echarts-jsx
```

### View renderer

Any kinds of Render engines that you like can be used to render ECharts JSX tags.

#### React 19+

Old versions have a property bug of Custom elements: https://github.com/facebook/react/issues/11347

```shell
npm i react@^19 react-dom@^19
```

#### Preact

```shell
npm i preact
```

then configure your tool-chain: https://preactjs.com/guide/v10/getting-started#integrating-into-an-existing-pipeline

and write chart codes as this demo: https://idea2app.github.io/React-MobX-Bootstrap-ts/#/chart

#### DOM Renderer v2 & WebCell v3

```shell
npm i dom-renderer@^2
```

then configure your project as [the demo code](preview/).

#### Vue 3

```shell
npm create vite vue-echarts-app -- --template vue-ts
```

then configure your Vite as following code:

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: tag => tag.startsWith('ec-')
                }
            }
        })
    ]
});
```

and write chart codes as this demo: https://idea2app.github.io/Vue-Prime-ts/#/chart

## Simple example

Origin: [ECharts official example][9]

[![Edit ECharts-JSX-1.0-demo](https://codesandbox.io/static/img/play-codesandbox.svg)][10]

```tsx
import { render } from 'react-dom';
import 'echarts-jsx';

render(
    <ec-svg-renderer theme="dark" style={{ width: '100%', height: '75vh' }}>
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

        <ec-bar-chart
            name="sales"
            data={[5, 20, 36, 10, 10, 20]}
            onClick={console.log}
        />
    </ec-svg-renderer>,
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
[7]: https://github.com/ecomfe/awesome-echarts?tab=readme-ov-file#web-components
[8]: https://nodei.co/npm/echarts-jsx/
[9]: https://echarts.apache.org/handbook/en/get-started/
[10]: https://codesandbox.io/p/devbox/echarts-jsx-1-0-demo-h2dz8t?file=%2Fsrc%2FBar.tsx&embed=1
