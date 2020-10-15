import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { ChartContainer } from "./components/shared/ChartContainer";
function App() {
  return (
    <Grid container>
      <Typography>React Dashboard</Typography>
      <Grid
        container
        item
        style={{ display: "flex", flexWrap: "wrap", padding: 50 }}
        spacing={3}
      >
        <ChartContainer>Pakistan</ChartContainer>
        <ChartContainer>Pakistan</ChartContainer>
        <ChartContainer>Pakistan</ChartContainer>
        <ChartContainer>Pakistan</ChartContainer>
        <ChartContainer>Pakistan</ChartContainer>
        <ChartContainer>Pakistan</ChartContainer>
      </Grid>
    </Grid>
  );
}

export default App;
