import React from "react";
import ChartContainer from "./components/shared/ChartContainer";
import NavBarContainer from "./components/shared/NavBarContainer";
import NavBar from './components/shared/NavBar'
import { Grid } from "@material-ui/core";
import BarChart from './components/BarChart';

function App() {

  return (
    <Grid container>
      <Grid
        container
        item
        style={{ display: "flex", flexWrap: "wrap", padding: 50 }}
        spacing={3}
      >
        <NavBarContainer>
          <NavBar title="React Dashboard"/>
        </NavBarContainer>
        <ChartContainer>
          <BarChart />
        </ChartContainer>
        
      </Grid>
    </Grid>
  );
}

export default App;
