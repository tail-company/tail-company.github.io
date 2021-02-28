import { Box, Grid, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";

import FullPageSlide from "components/FullPageSlide";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body1: {
      fontSize: 20,
    },
    h1: {
      fontSize: 25,
    },
    h2: {
      fontSize: 115,
    },
    h3: {
      fontSize: 83,
    },
    h3Postposition: {
      fontSize: 37,
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

export default function About() {
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
            About
          </Typography>
        </Box>
        <Box flexGrow={1} alignItems="center">
          <Box width="100%" height="100%" display="flex" alignItems="center">
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Box width="100%" height="100%" display="flex">
                  <Box alignSelf="center">
                    <Typography variant="h2" className={classes.h2}>
                      First
                      <br />
                      investor
                      <br />
                      to
                      <br />
                      <strong>
                        medical
                        <br />
                        startup<span className="yellow">.</span>
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
                  <Box alignSelf="flex-end">
                    <Typography
                      variant="h3"
                      align="right"
                      className={classes.h3}
                    >
                      TAIL
                      <span className={clsx("ko", classes.h3Postposition)}>
                        {" "}
                        은
                      </span>
                    </Typography>{" "}
                    <Typography
                      variant="body1"
                      align="right"
                      className={classes.body1}
                    >
                      Digital, AI, Data Science
                      <span className="ko">
                        가 제시하고 있는 새로운 접근법을 통해
                        <br />
                        의학 및 의료산업 전반에 존재하는 비효율과
                        <br />
                        가능성에 대한 도전을 장려하고 꿈을 현실화 시키고자
                        합니다.
                      </span>
                    </Typography>
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
