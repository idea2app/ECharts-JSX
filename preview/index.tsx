import { DOMRenderer } from 'dom-renderer';

import { BarChart } from './chart/Bar';
import { CandleStickChart } from './chart/CandleStick';
import { FunnelChart } from './chart/Funnel';
import { GaugeChart } from './chart/Gauge';
import { LineChart } from './chart/Line';
import { PieChart } from './chart/Pie';
import { RadarChart } from './chart/Radar';
import { ScatterChart } from './chart/Scatter';

new DOMRenderer().render(
    <>
        <h1>ECharts JSX demo</h1>

        <ScatterChart />
        <LineChart />
        <BarChart />
        <CandleStickChart />
        <FunnelChart />
        <PieChart />
        <RadarChart />
        <GaugeChart />
    </>,
    document.querySelector('main')
);
