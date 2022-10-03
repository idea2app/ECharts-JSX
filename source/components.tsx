import { FC } from 'react';
import {
    TitleComponentOption,
    LegendComponentOption,
    TooltipComponentOption,
    SeriesOption,
    XAXisComponentOption,
    YAXisComponentOption
} from 'echarts';

export type TitleProps = Omit<TitleComponentOption, 'text'>;

export const Title: FC<TitleProps> = () => <></>;

export const Legend: FC<LegendComponentOption> = () => <></>;

export const Tooltip: FC<TooltipComponentOption> = () => <></>;

export const Series: FC<SeriesOption> = () => <></>;

export const XAxis: FC<XAXisComponentOption> = () => <></>;

export const YAxis: FC<YAXisComponentOption> = () => <></>;
