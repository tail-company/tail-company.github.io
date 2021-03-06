import { Box, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

import FullPageSlide from "components/FullPageSlide";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    caption: {
      fontSize: 14,
    },
    content: {
      [theme.breakpoints.up("md")]: {
        paddingLeft: theme.spacing(16),
      },
    },
    h1: {
      fontSize: 100 * 0.75 * 0.65,
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up("sm")]: {
        fontSize: 100 * 0.75,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 100,
      },
    },
    h2: {
      fontSize: 34 * 0.75 * 0.65,
      marginBottom: theme.spacing(6),
      [theme.breakpoints.up("sm")]: {
        fontSize: 34 * 0.75,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 34,
      },
    },
  })
);

export default function Home() {
  const classes = useStyles();

  return (
    <FullPageSlide>
      <Box width="100%" height="100%" display="flex">
        <Box alignSelf="center" className={classes.content}>
          <Typography variant="h1" className={classes.h1}>
            The Art Is Long,
          </Typography>
          <Typography variant="h2" className={classes.h2}>
            Life is short, Opportunity fleeting,
            <br />
            Experiment dangerous, Judgment difficult.
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            B.C. 500. Hippocrates
          </Typography>
        </Box>
      </Box>
    </FullPageSlide>
  );
}
