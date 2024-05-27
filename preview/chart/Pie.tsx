import '../../source/renderers/SVG';
import '../../source/components/title';
import '../../source/components/legend';
import '../../source/components/tooltip';
import '../../source/charts/pie';

/**
 * @see https://echarts.apache.org/examples/editor.html?c=pie-simple
 */
export const PieChart = () => (
    <ec-svg-renderer style={{ height: '60vh' }}>
        <ec-title
            text="Referer of a Website"
            subtext="Fake Data"
            left="center"
        />
        <ec-legend orient="vertical" left="left" />

        <ec-tooltip trigger="item" />

        <ec-pie-chart
            name="Access From"
            radius="50%"
            data={[
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ]}
            emphasis={{
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }}
        />
    </ec-svg-renderer>
);
