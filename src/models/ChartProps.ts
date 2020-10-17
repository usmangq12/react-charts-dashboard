interface IMargin {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export class ChartProps {
  parentWidth = 500;
  margin: IMargin = {
    top: 10,
    right: 10,
    bottom: 20,
    left: 40,
  };
  ticks = 6;
  width = this.parentWidth - this.margin.left - this.margin.right;
  height = this.parentWidth * 0.5 - this.margin.top - this.margin.bottom;
}
