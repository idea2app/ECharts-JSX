import '../../source/renderers/SVG';
import '../../source/components/tooltip';
import '../../source/charts/gauge';

/**
 * @see https://echarts.apache.org/examples/en/editor.html?c=gauge
 */
export const GaugeChart = () => (
    <ec-svg-renderer style={{ height: '60vh' }}>
        <ec-tooltip formatter="{a} <br/>{b} : {c}%" />

        <ec-gauge-chart name="Pressure" data={[{ value: 50, name: 'SCORE' }]} />
    </ec-svg-renderer>
);
