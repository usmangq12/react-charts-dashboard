import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import NavbarStyles from "../../styles/NavBar";

interface IProps {
  handleRandomizeData: () => void
}

export const NavBar = ({handleRandomizeData}: IProps) => {
  const styles = NavbarStyles();
  return (
    <AppBar className={styles.appBar}>
      <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
        <Typography variant="h4" className={styles.MarginRight}>
          {"XXX Sales Report Dashboard"}
        </Typography>
        <Button variant={"contained"} onClick={handleRandomizeData}>Randomize Data</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
