import { Box, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

import FullPageSlide from "components/FullPageSlide";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h1: {
      fontSize: 133,
      marginBottom: theme.spacing(4),
    },
    h2: {
      fontSize: 45,
      marginBottom: theme.spacing(6),
    },
    caption: {
      fontSize: 19,
    },
  })
);

export default function Home() {
  const classes = useStyles();

  return (
    <FullPageSlide>
      <Box width="100%" height="100%" display="flex">
        <Box alignSelf="center" pl={16}>
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
