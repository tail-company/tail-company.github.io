import { Box, Toolbar } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spacer: {
      height: 1,
    },
    toolbarBottom: {
      minHeight: 48 * 0.6,
      [theme.breakpoints.up("sm")]: {
        minHeight: 48 * 0.8,
      },
      [theme.breakpoints.up("md")]: {
        minHeight: 48,
      },
    },
    toolbarTop: {
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

export default function FullPageSlide(props) {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box>
        <Toolbar className={classes.toolbarTop} />
      </Box>
      <Box flexGrow={1} height={0}>
        {props.children}
      </Box>
      <Box>
        <div className={classes.spacer} />
        <Toolbar className={classes.toolbarBottom} />
      </Box>
    </Box>
  );
}
