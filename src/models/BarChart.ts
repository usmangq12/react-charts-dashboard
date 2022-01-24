import { ChartProps } from '../models/ChartProps';

export interface IBarChartData {
    name: string;
    value: string;
}

export interface IBarChartProps {
    chartProps: ChartProps;
    data: IBarChartData[]
}