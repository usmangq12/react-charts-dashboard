import React, { useState } from "react";
import ChartContainer from "./components/shared/ChartContainer";
import NavBarContainer from "./components/shared/NavBarContainer";
import NavBar from "./components/shared/NavBar";
import { Grid, Button } from "@material-ui/core";
import BarChart from "./components/BarChart";
import { ChartData } from "./models";
import { generateChartData, Products } from "./utilities/utils";

function App() {
  const [charts] = useState<React.FC[]>(() => [BarChart]);
  const [chartData, setChartData] = useState<ChartData[]>(() =>
    generateChartData(Products)
  );

  const randomizeChartData = () => {
    setChartData(generateChartData(Products));
  };

  return (
    <Grid container>
      <NavBar title="React Dashboard" />
      {charts.map((chart) => (
        <ChartContainer component={chart} data={chartData} />
      ))}
      <Button
        onClick={randomizeChartData}
        variant="contained"
        style={{ width: "200px", height: "50px", marginTop: 100, backgroundColor: "purple", color: "white" }}
      >
        Randomize Data
      </Button>
    </Grid>
  );
}

export default App;
