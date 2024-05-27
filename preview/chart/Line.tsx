import '../../source/renderers/SVG';
import '../../source/components/x-axis';
import '../../source/components/y-axis';
import '../../source/charts/line';

/**
 * @see https://echarts.apache.org/examples/editor.html?c=line-simple
 */
export const LineChart = () => (
    <ec-svg-renderer style={{ height: '60vh' }}>
        <ec-x-axis
            type="category"
            data={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        />
        <ec-y-axis type="value" />

        <ec-line-chart data={[150, 230, 224, 218, 135, 147, 260]} />
    </ec-svg-renderer>
);
