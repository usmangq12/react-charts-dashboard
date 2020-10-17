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
      <Button
        onClick={randomizeChartData}
        variant="contained"
        style={{backgroundColor: "purple", color: "white"}}
      >
        Randomize Data
      </Button>
      <Grid
        container
        item
        style={{ display: "flex", flexWrap: "wrap", padding: 50 }}
        spacing={3}
      >
        {/* <NavBarContainer>
          <NavBar title="React Dashboard" />
        </NavBarContainer> */}
        {charts.map((chart) => (
          <ChartContainer component={chart} data={chartData} />
        ))}
      </Grid>
    </Grid>
  );
}

export default App;
