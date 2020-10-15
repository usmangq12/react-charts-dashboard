import React, { ReactNode } from "react";
import { Grid, Paper } from "@material-ui/core";

interface IProps {
  children?: ReactNode;
}

export const ChartContainer = ({ children }: IProps) => {
  return (
    <Grid item xs={12} sm={6}>
      <Paper elevation={3}>{children}</Paper>
    </Grid>
  );
};
