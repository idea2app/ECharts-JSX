import '../../source/renderers/SVG';
import '../../source/components/tooltip';
import '../../source/components/legend';
import '../../source/components/toolbox';
import '../../source/components/grid';
import '../../source/components/x-axis';
import '../../source/components/y-axis';
import '../../source/charts/line';

/**
 * @see {@link https://echarts.apache.org/examples/editor.html?c=line-stack}
 */
export const MultipleLine = () => (
    <ec-svg-renderer style={{ height: '60vh' }}>
        <ec-title text="Stacked Line" />

        <ec-tooltip trigger="axis" />

        <ec-legend
            data={[
                'Email',
                'Union Ads',
                'Video Ads',
                'Direct',
                'Search Engine'
            ]}
        />
        <ec-grid left="3%" right="4%" bottom="3%" containLabel />

        <ec-toolbox feature={{ saveAsImage: {} }} />

        <ec-x-axis
            type="category"
            boundaryGap={false}
            data={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        />
        <ec-y-axis type="value" />

        <ec-line-chart
            name="Email"
            stack="Total"
            data={[120, 132, 101, 134, 90, 230, 210]}
        />
        <ec-line-chart
            name="Union Ads"
            stack="Total"
            data={[220, 182, 191, 234, 290, 330, 310]}
        />
        <ec-line-chart
            name="Video Ads"
            stack="Total"
            data={[150, 232, 201, 154, 190, 330, 410]}
        />
        <ec-line-chart
            name="Direct"
            stack="Total"
            data={[320, 332, 301, 334, 390, 330, 320]}
        />
        <ec-line-chart
            name="Search Engine"
            stack="Total"
            data={[820, 932, 901, 934, 1290, 1330, 1320]}
        />
    </ec-svg-renderer>
);
