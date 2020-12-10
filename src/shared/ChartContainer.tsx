import React from "react";
import { Grid } from "@material-ui/core";
import { ChartData, ChartProps, IChartProps } from "../models";

interface IProps {
  component: React.FC<IChartProps>;
  data: ChartData[];
}

export const ChartContainer = ({ component: Component, data }: IProps) => {
  return (
    <Grid item xs={12} sm={6}>
      <Component data={data} chartProps={new ChartProps()} />
    </Grid>
  );
};

export default ChartContainer;