import { Box, Grid, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

import FullPageSlide from "components/FullPageSlide";
import PeopleMember from "components/PeopleMember";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h1: {
      fontSize: 25,
    },
    h2: {
      fontSize: 96,
    },
    root: {
      position: "relative",
    },
    title: {
      position: "absolute",
      top: theme.spacing(3),
      right: 0,
    },
  })
);

export default function People() {
  const classes = useStyles();

  return (
    <FullPageSlide>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        className={classes.root}
      >
        <Box className={classes.title}>
          <Typography
            variant="h2"
            component="h1"
            align="right"
            className={classes.h1}
          >
            People
          </Typography>
        </Box>
        <Box flexGrow={1} alignItems="center">
          <Box width="100%" height="100%" display="flex" alignItems="center">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Box width="100%" height="100%" display="flex">
                  <Box alignSelf="flex-end">
                    <Typography variant="h2" className={classes.h2}>
                      Medical
                      <br />
                      Doctors
                      <br />
                      <strong>
                        Entrepreneurship<span className="yellow">.</span>
                      </strong>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  width="100%"
                  height="100%"
                  display="flex"
                  justifyContent="flex-end"
                >
                  <Box alignSelf="center">
                    <PeopleMember />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </FullPageSlide>
  );
}
