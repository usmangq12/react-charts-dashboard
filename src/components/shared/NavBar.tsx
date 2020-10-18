import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import NavbarStyles from "../../styles/NavBar";

interface IProps {
  title?: string;
}

export const NavBar = ({ title }: IProps) => {
  const navbarClasses = NavbarStyles();
  return (
    <Grid
      container
      item
      style={{ display: "flex", flexWrap: "wrap", padding: 50 }}
      spacing={3}
    >
      <AppBar className={navbarClasses.appBar}>
        <Toolbar>
          <Typography variant="h4" className={navbarClasses.MarginRight}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default NavBar;
