import { DOMRenderer } from 'dom-renderer';
import '../source/renderers/SVG';
import '../source/components/title';
import '../source/components/x-axis';
import '../source/components/y-axis';
import '../source/charts/line';

new DOMRenderer().render(
    <ec-svg-renderer style={{ height: '75vh' }}>
        <ec-title text="ECharts Getting Started Example" />

        <ec-x-axis
            type="category"
            data={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        />
        <ec-y-axis type="value" />

        <ec-line-chart
            data={[150, 230, 224, 218, 135, 147, 260]}
            onClick={console.log}
        />
    </ec-svg-renderer>,
    document.querySelector('main')
);
