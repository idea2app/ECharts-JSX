import '../../source/renderers/SVG';
import '../../source/components/title';
import '../../source/components/legend';
import '../../source/components/radar';
import '../../source/charts/radar';

/**
 * @see https://echarts.apache.org/examples/editor.html?c=radar
 */
export const RadarChart = () => (
    <ec-svg-renderer style={{ height: '60vh' }}>
        <ec-title text="Basic Radar Chart" />

        <ec-legend data={['Allocated Budget', 'Actual Spending']} />
        <ec-radar
            shape="circle"
            indicator={[
                { name: 'Sales', max: 6500 },
                { name: 'Administration', max: 16000 },
                { name: 'Information Technology', max: 30000 },
                { name: 'Customer Support', max: 38000 },
                { name: 'Development', max: 52000 },
                { name: 'Marketing', max: 25000 }
            ]}
        />
        <ec-radar-chart
            name="Budget vs spending"
            data={[
                {
                    value: [4200, 3000, 20000, 35000, 50000, 18000],
                    name: 'Allocated Budget'
                },
                {
                    value: [5000, 14000, 28000, 26000, 42000, 21000],
                    name: 'Actual Spending'
                }
            ]}
        />
    </ec-svg-renderer>
);
