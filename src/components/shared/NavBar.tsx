import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import NavbarStyles from "../../styles/NavBar";

interface IProps {
  title?: string;
}

export const NavBar = ({ title }: IProps) => {
  const navbarClasses = NavbarStyles();
  return (
    <AppBar className={navbarClasses.appBar}>
      <Toolbar>
        <Typography variant="h4" className={navbarClasses.MarginRight}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
