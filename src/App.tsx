import React, { useState } from "react";
import ChartContainer from "./shared/ChartContainer";
import NavBar from "./shared/NavBar";
import { Grid } from "@material-ui/core";
import BarChart from "./components/BarChart/BarChart";
import LineChart from "./components/LineChart/LineChart";
import { ChartData } from "./models";
import { generateChartData, Products } from "./utilities/utils";
import { IChartProps } from "./models/ChartProps"

function App() {
  const [charts] = useState<React.FC<IChartProps>[]>(() => [BarChart, LineChart]);
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
        {charts.map((chart) => (
          <ChartContainer component={chart} data={chartData} />
        ))}
      </Grid>
    </Grid>
  );
}

export default App;