import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import clsx from "clsx";
import React from "react";

interface HeaderProps {
  onButtonClick: (page: number) => void;
  page: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      //backgroundColor: fade(theme.palette.common.white, 0.1),
      backgroundColor: fade(theme.palette.common.white, 1),
    },
    container: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    mark: {
      color: "transparent",
    },
    menu: {
      fontSize: 15 * 0.75,
      fontWeight: "bold",
      textTransform: "none",
      [theme.breakpoints.up("sm")]: {
        fontSize: 15,
      },
    },
    selected: {
      color: "#f8e00e",
    },
    title: {
      cursor: "pointer",
      flexGrow: 1,
      fontSize: 30 * 0.75,
      [theme.breakpoints.up("sm")]: {
        fontSize: 30,
      },
    },
    toolbar: {
      minHeight: 75 * 0.6,
      [theme.breakpoints.up("sm")]: {
        minHeight: 75 * 0.8,
      },
      [theme.breakpoints.up("md")]: {
        minHeight: 75,
      },
    },
  })
);

export default function Header({ onButtonClick, page }: HeaderProps) {
  const classes = useStyles();

  return (
    <>
      <AppBar
        position="fixed"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Container maxWidth="lg" className={classes.container}>
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              className={classes.title}
              onClick={() => onButtonClick(0)}
            >
              TAIL
            </Typography>
            <Button
              color="inherit"
              onClick={() => onButtonClick(0)}
              className={classes.menu}
            >
              Home{" "}
              <span className={clsx(classes.mark, !page && classes.selected)}>
                *
              </span>
            </Button>
            <Button
              color="inherit"
              onClick={() => onButtonClick(1)}
              className={classes.menu}
            >
              About{" "}
              <span
                className={clsx(classes.mark, page === 1 && classes.selected)}
              >
                *
              </span>
            </Button>
            <Button
              color="inherit"
              onClick={() => onButtonClick(2)}
              className={classes.menu}
            >
              Portfolio{" "}
              <span
                className={clsx(classes.mark, page === 2 && classes.selected)}
              >
                *
              </span>
            </Button>
            <Button
              color="inherit"
              onClick={() => onButtonClick(3)}
              className={classes.menu}
            >
              People{" "}
              <span
                className={clsx(classes.mark, page === 3 && classes.selected)}
              >
                *
              </span>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
