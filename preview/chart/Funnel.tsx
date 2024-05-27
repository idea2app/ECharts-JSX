import '../../source/renderers/SVG';
import '../../source/components/title';
import '../../source/components/legend';
import '../../source/components/tooltip';
import '../../source/charts/funnel';

/**
 * @see https://echarts.apache.org/examples/en/editor.html?c=funnel
 */
export const FunnelChart = () => (
    <ec-svg-renderer style={{ height: '60vh' }}>
        <ec-title text="Funnel" subtext="Funnel Example" left="center" />

        <ec-legend orient="vertical" left="left" />

        <ec-tooltip trigger="item" />

        <ec-funnel-chart
            name="Funnel Chart"
            data={[
                { value: 100, name: 'Show' },
                { value: 60, name: 'Visit' },
                { value: 40, name: 'Inquiry' },
                { value: 20, name: 'Order' },
                { value: 80, name: 'Click' }
            ]}
        />
    </ec-svg-renderer>
);
