import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const NavbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    MarginRight: {
      marginRight: 50
    },
    appBar: {
      backgroundColor: "#3d7ea6",
    }
  })
);

export default NavbarStyles;
