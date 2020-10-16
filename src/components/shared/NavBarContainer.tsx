import React, { ReactNode } from "react";
import { Grid, Paper } from "@material-ui/core";

interface IProps {
  children?: ReactNode;
}

export const NavBarContainer = ({ children }: IProps) => {
  return (
    <Grid item xs={12} sm={12}>
      <Paper elevation={3}>{children}</Paper>
    </Grid>
  );
};

export default NavBarContainer;