import type {
    TitleComponentOption,
    ToolboxComponentOption,
    LegendComponentOption,
    VisualMapComponentOption,
    TooltipComponentOption,
    GridComponentOption,
    SingleAxisComponentOption,
    ParallelComponentOption,
    XAXisComponentOption,
    YAXisComponentOption,
    CalendarComponentOption
} from 'echarts';

import { EC } from './charts';
import { optionCreator, componentLoader } from './utility';

export type TitleProps = Omit<TitleComponentOption, 'text'>;
/**
 * @example
 * ```tsx
 * <Title>Hello, ECharts JSX!</Title>
 * ```
 */
export const Title: EC<TitleProps> = () => <></>;

Title.optionOf = ({ children, ...props }) => ({
    title: { ...props, text: children }
});

Title.loadModule = componentLoader(['TitleComponent']);

/**
 * @example
 * ```tsx
 * <Toolbox feature={{ saveAsImage: {} }} />
 * ```
 */
export const Toolbox: EC<ToolboxComponentOption> = () => <></>;

Toolbox.optionOf = optionCreator('toolbox');

Toolbox.loadModule = componentLoader(['ToolboxComponent']);

/**
 * @example
 * ```tsx
 * <Legend data={['sales']} />
 * ```
 */
export const Legend: EC<LegendComponentOption> = () => <></>;

Legend.optionOf = optionCreator('legend');

Legend.loadModule = componentLoader(['LegendComponent']);

/**
 * @example
 * ```tsx
 * <VisualMap calculable top="middle" right={10} color={['red', 'yellow']} />
 * ```
 */
export const VisualMap: EC<VisualMapComponentOption> = () => <></>;

VisualMap.optionOf = optionCreator('visualMap');

VisualMap.loadModule = componentLoader(['VisualMapComponent']);

/**
 * @example
 * ```tsx
 * <Tooltip />
 * ```
 */
export const Tooltip: EC<TooltipComponentOption> = () => <></>;

Tooltip.optionOf = optionCreator('tooltip');

Tooltip.loadModule = async () => {
    const [{ LabelLayout }, { TooltipComponent }] = await Promise.all([
        import('echarts/features'),
        import('echarts/components')
    ]);
    return [LabelLayout, TooltipComponent];
};

/**
 * @example
 * ```tsx
 * <Grid left="10%" right="10%" bottom="15%" />
 * ```
 */
export const Grid: EC<GridComponentOption> = () => <></>;

Grid.optionOf = optionCreator('grid');

Grid.loadModule = componentLoader(['GridComponent']);

export const SingleAxis: EC<SingleAxisComponentOption> = () => <></>;

SingleAxis.optionOf = optionCreator('singleAxis');

SingleAxis.loadModule = componentLoader(['SingleAxisComponent']);

/**
 * @example
 * ```tsx
 * <ParallelAxis dim={0} name="Price" />
 * <ParallelAxis dim={1} name="Net Weight" />
 * <ParallelAxis dim={2} name="Amount" />
 * ```
 */
export const ParallelAxis: EC<ParallelComponentOption> = () => <></>;

ParallelAxis.optionOf = optionCreator('parallelAxis');

ParallelAxis.loadModule = componentLoader(['ParallelComponent']);

/**
 * @example
 * ```tsx
 * <XAxis
 *     data={['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']}
 * />
 * ```
 */
export const XAxis: EC<XAXisComponentOption> = () => <></>;

XAxis.optionOf = optionCreator('xAxis');

XAxis.loadModule = componentLoader(['GridComponent']);

/**
 * @example
 * ```tsx
 * <YAxis />
 * ```
 */
export const YAxis: EC<YAXisComponentOption> = () => <></>;

YAxis.optionOf = optionCreator('yAxis');

YAxis.loadModule = componentLoader(['GridComponent']);

/**
 * @example
 * ```tsx
 * <Calendar
 *     cellSize={['auto', 13]}
 *     range="2016"
 *     yearLabel={{ show: false }}
 *  />
 */
export const Calendar: EC<CalendarComponentOption> = () => <></>;

Calendar.optionOf = optionCreator('calendar');

Calendar.loadModule = componentLoader(['CalendarComponent']);
