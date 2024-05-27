import '../../source/renderers/SVG';
import '../../source/components/x-axis';
import '../../source/components/y-axis';
import '../../source/charts/candlestick';

/**
 * @see https://echarts.apache.org/examples/editor.html?c=candlestick-simple
 */
export const CandleStickChart = () => (
    <ec-svg-renderer style={{ height: '60vh' }}>
        <ec-x-axis
            data={['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']}
        />
        <ec-y-axis />
        <ec-candlestick-chart
            data={[
                [20, 34, 10, 38],
                [40, 35, 30, 50],
                [31, 38, 33, 44],
                [38, 15, 5, 42]
            ]}
        />
    </ec-svg-renderer>
);
