import { Box, Toolbar } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spacer: {
      height: 1,
    },
    toolbarTop: {
      minHeight: 100,
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
      <Box flexGrow={1}>{props.children}</Box>
      <Box>
        <div className={classes.spacer} />
        <Toolbar />
      </Box>
    </Box>
  );
}
