import { Box, Grid, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

import FullPageSlide from "components/FullPageSlide";
import PeopleMember from "components/PeopleMember";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      position: "relative",
    },
    desc: {
      bottom: 0,
      left: 0,
      position: "absolute",
      zIndex: -1,
    },
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
      right: 0,
      top: theme.spacing(3),
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
        <Box flexGrow={1} height={0} alignItems="center">
          <Box width="100%" height="100%" display="flex" alignItems="center">
            <Box
              width="100%"
              display="flex"
              justifyContent="flex-end"
              className={classes.content}
            >
              <Box className={classes.desc}>
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
              <Box alignSelf="center">
                <PeopleMember />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </FullPageSlide>
  );
}
