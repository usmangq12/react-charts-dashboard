import React, { useState } from "react";
import ChartContainer from "./shared/ChartContainer";
import NavBar from "./shared/NavBar";
import { Grid } from "@material-ui/core";
import BarChart from "./components/BarChart/BarChart";
import LineChart from "./components/LineChart/LineChart";
import { ChartData } from "./models";
import { generateChartData, Products, BarChartData } from "./utilities/utils";
import { IChartProps, ChartProps } from "./models/ChartProps";

function App() {
  const [charts] = useState<React.FC<IChartProps>[]>(() => [LineChart]);
  const [chartData, setChartData] = useState<ChartData[]>(() =>
    generateChartData(Products)
  );

  const randomizeChartData = () => {
    setChartData(generateChartData(Products));
  };

  return (
    <Grid container>
      <NavBar handleRandomizeData={randomizeChartData} />
      <Grid
        container
        item
        style={{ display: "flex", flexWrap: "wrap", padding: "100px" }}
        spacing={3}
      >
        <Grid item xs={12} sm={6}>
          <BarChart chartProps={new ChartProps()} data={BarChartData} />
        </Grid>
        {charts.map((chart) => (
          <ChartContainer component={chart} data={chartData} />
        ))}
      </Grid>
    </Grid>
  );
}

export default App;
