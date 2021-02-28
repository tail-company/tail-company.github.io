import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.common.white,
      // borderTop: "1px solid black",
      borderTop: "1px solid white",
      bottom: 0,
      top: "auto",
    },
    container: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    copyright: {
      width: "100%",
      fontWeight: "bold",
    },
  })
);

export default function Footer() {
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
          <Toolbar>
            <Typography
              variant="body2"
              align="center"
              className={classes.copyright}
            >
              Copyright ⓒ TAIL 2021. All rights reserved.
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
