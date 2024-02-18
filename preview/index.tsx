import { DOMRenderer } from 'dom-renderer';
import '../source/';

new DOMRenderer().render(
    <ec-chart type="canvas" style={{ height: '75vh' }}>
        <ec-title text="ECharts Getting Started Example" />

        <ec-x-axis
            type="category"
            data={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        />
        <ec-y-axis type="value" />

        <ec-series
            type="line"
            data={[150, 230, 224, 218, 135, 147, 260]}
            onClick={console.log}
        />
    </ec-chart>,
    document.querySelector('main')
);
