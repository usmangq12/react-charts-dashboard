import { ChartData } from "../models";

export const Products: string[] = [
  "Shoes",
  "Shirts",
  "Pants",
  "Jackets",
  "Wallets",
  "Belts",
];

export const generateChartData = (labels: string[]): ChartData[] => {
  return labels.map((label: string) => ({
    name: label,
    value: Math.random() * 100,
  }));
};
