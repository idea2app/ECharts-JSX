import type {
    TitleComponentOption,
    ToolboxComponentOption,
    LegendComponentOption,
    VisualMapComponentOption,
    TooltipComponentOption,
    GridComponentOption,
    XAXisComponentOption,
    YAXisComponentOption
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
