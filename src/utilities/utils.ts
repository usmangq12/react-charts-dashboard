import { ChartData, ScatterChartData } from "../models";

export const Products: string[] = [
  "Shoes",
  "Shirts",
  "Pants",
  "Jackets",
  "Wallets",
  "Belts",
];

export const ScatterTimestamps: Date[] = [
  new Date("10/21/2019  01:11:00 PM"),
  new Date("10/22/2019  02:15:00 PM"),
  new Date("10/23/2019  03:02:00 PM"),
  new Date("10/24/2019  04:47:00 PM"),
  new Date("10/25/2019  05:20:00 PM"),
  new Date("10/26/2019  06:33:00 PM"),
  new Date("10/27/2019  07:31:00 PM"),
  new Date("10/28/2019  08:38:00 PM"),
  new Date("10/29/2019  09:35:00 PM"),
  new Date("10/30/2019  10:40:00 PM")
];

export const ScatterLabels: string[] = ["New York", "San Francisco", "Austin"]

export const generateChartData = (labels: string[]): ChartData[] => {
  return labels.map((label: string) => ({
    name: label,
    value: Math.random() * 100,
  }));
};

export const generateScatterChartData = (labels: string[], timestamps: Date[]): ScatterChartData[] => {
  return labels.map((label: string) => ({
    name: label,
    values: timestamps.map((timestamp: Date) => ({date: timestamp, value: Math.random() * 50}))
  }));
};

export const getChartsData = (lineChartData: ChartData[], scatterChartData: ScatterChartData[]): [ChartData[], ScatterChartData[]] => {
  return [lineChartData, scatterChartData];
}
