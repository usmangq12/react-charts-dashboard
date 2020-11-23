export interface ChartData {
  name: string;
  value: number;
}

export interface ScatterChartData {
  name: string;
  // values: ScatterValues[];
}

export interface ScatterValues {
  date: Date;
  value: number;
}
