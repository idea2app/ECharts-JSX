import '../../source/renderers/SVG';
import '../../source/components/title';
import '../../source/components/legend';
import '../../source/components/tooltip';
import '../../source/components/x-axis';
import '../../source/components/y-axis';
import '../../source/charts/bar';

/**
 * @see https://echarts.apache.org/handbook/en/get-started/
 */
export const BarChart = () => (
    <ec-svg-renderer style={{ height: '60vh' }}>
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
    </ec-svg-renderer>
);
