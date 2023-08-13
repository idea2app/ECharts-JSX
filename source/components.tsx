import type {
    AxisPointerComponentOption,
    CalendarComponentOption,
    GridComponentOption,
    LegendComponentOption,
    ParallelComponentOption,
    SingleAxisComponentOption,
    TitleComponentOption,
    ToolboxComponentOption,
    TooltipComponentOption,
    VisualMapComponentOption,
    XAXisComponentOption,
    YAXisComponentOption
} from 'echarts';

import { EC } from './charts';
import { EventHandlerProps, optionCreator, componentLoader } from './utility';

export type TitleProps = EventHandlerProps & Omit<TitleComponentOption, 'text'>;
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

export type ToolboxProps = EventHandlerProps & ToolboxComponentOption;
/**
 * @example
 * ```tsx
 * <Toolbox feature={{ saveAsImage: {} }} />
 * ```
 */
export const Toolbox: EC<ToolboxProps> = () => <></>;

Toolbox.optionOf = optionCreator('toolbox');

Toolbox.loadModule = componentLoader(['ToolboxComponent']);

export type LegendProps = EventHandlerProps & LegendComponentOption;
/**
 * @example
 * ```tsx
 * <Legend data={['sales']} />
 * ```
 */
export const Legend: EC<LegendProps> = () => <></>;

Legend.optionOf = optionCreator('legend');

Legend.loadModule = componentLoader(['LegendComponent']);

export type VisualMapProps = EventHandlerProps & VisualMapComponentOption;
/**
 * @example
 * ```tsx
 * <VisualMap calculable top="middle" right={10} color={['red', 'yellow']} />
 * ```
 */
export const VisualMap: EC<VisualMapProps> = () => <></>;

VisualMap.optionOf = optionCreator('visualMap');

VisualMap.loadModule = componentLoader(['VisualMapComponent']);

export type TooltipProps = EventHandlerProps & TooltipComponentOption;
/**
 * @example
 * ```tsx
 * <Tooltip />
 * ```
 */
export const Tooltip: EC<TooltipProps> = () => <></>;

Tooltip.optionOf = optionCreator('tooltip');

Tooltip.loadModule = async () => {
    const [{ LabelLayout }, { TooltipComponent }] = await Promise.all([
        import('echarts/features'),
        import('echarts/components')
    ]);
    return [LabelLayout, TooltipComponent];
};

export type GridProps = EventHandlerProps & GridComponentOption;
/**
 * @example
 * ```tsx
 * <Grid left="10%" right="10%" bottom="15%" />
 * ```
 */
export const Grid: EC<GridProps> = () => <></>;

Grid.optionOf = optionCreator('grid');

Grid.loadModule = componentLoader(['GridComponent']);

export type SingleAxisProps = EventHandlerProps & SingleAxisComponentOption;

export const SingleAxis: EC<SingleAxisProps> = () => <></>;

SingleAxis.optionOf = optionCreator('singleAxis');

SingleAxis.loadModule = componentLoader(['SingleAxisComponent']);

export type ParallelAxisProps = EventHandlerProps & ParallelComponentOption;
/**
 * @example
 * ```tsx
 * <ParallelAxis dim={0} name="Price" />
 * <ParallelAxis dim={1} name="Net Weight" />
 * <ParallelAxis dim={2} name="Amount" />
 * ```
 */
export const ParallelAxis: EC<ParallelAxisProps> = () => <></>;

ParallelAxis.optionOf = optionCreator('parallelAxis');

ParallelAxis.loadModule = componentLoader(['ParallelComponent']);

export type XAxisProps = EventHandlerProps & XAXisComponentOption;
/**
 * @example
 * ```tsx
 * <XAxis
 *     data={['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']}
 * />
 * ```
 */
export const XAxis: EC<XAxisProps> = () => <></>;

XAxis.optionOf = optionCreator('xAxis');

XAxis.loadModule = componentLoader(['GridComponent']);

export type YAxisProps = EventHandlerProps & YAXisComponentOption;
/**
 * @example
 * ```tsx
 * <YAxis />
 * ```
 */
export const YAxis: EC<YAxisProps> = () => <></>;

YAxis.optionOf = optionCreator('yAxis');

YAxis.loadModule = componentLoader(['GridComponent']);

export type CalendarProps = EventHandlerProps & CalendarComponentOption;
/**
 * @example
 * ```tsx
 * <Calendar
 *     cellSize={['auto', 13]}
 *     range="2016"
 *     yearLabel={{ show: false }}
 *  />
 */
export const Calendar: EC<CalendarProps> = () => <></>;

Calendar.optionOf = optionCreator('calendar');

Calendar.loadModule = componentLoader(['CalendarComponent']);


export type AxisPointerProps = EventHandlerProps & AxisPointerComponentOption;
/**
 * @example
 * ```tsx
 * <AxisPointer link={[{ xAxisIndex: 'all' }]} />
 * ```
 */
export const AxisPointer: EC<AxisPointerProps> = () => <></>;

AxisPointer.optionOf = optionCreator('axisPointer');

AxisPointer.loadModule = componentLoader(['AxisPointerComponent']);