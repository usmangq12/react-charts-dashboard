import { ChartData } from "./ChartData";

interface IMargin {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export class ChartProps {
  parentWidth = 550;
  margin: IMargin = {
    top: 10,
    right: 10,
    bottom: 40,
    left: 40,
  };
  ticks = 6;
  width = this.parentWidth - this.margin.left - this.margin.right;
  height = this.parentWidth * 0.5 - this.margin.top - this.margin.bottom;
}

export interface IChartProps {
  chartProps: ChartProps;
  data: ChartData[];
}
