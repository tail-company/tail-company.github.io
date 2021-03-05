import { Box, Button, Link, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface PeopleMemberProps {
  // TODO
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body1: {
      fontSize: 21,
      fontWeight: "bold",
    },
    body2: {
      fontSize: 16,
      marginBottom: theme.spacing(6),
    },
    h3: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
    },
    icon: {
      verticalAlign: "middle",
    },
    iconPrev: {
      transform: "scaleX(-1)",
    },
    next: {
      paddingLeft: theme.spacing(1.5),
    },
    prev: {
      paddingRight: theme.spacing(1.5),
    },
    photo: {
      // float: "right",
      paddingBottom: theme.spacing(3),
      paddingLeft: theme.spacing(4),
    },
  })
);

export default function PeopleMember({}: PeopleMemberProps) {
  const classes = useStyles();

  return (
    <Box display="flex">
      <Box>
        <Typography variant="h3" align="right" className={classes.h3}>
          <span className="ko">이호종</span>
          <br />
          Managing Partner
        </Typography>
        <Typography variant="body2" align="right" className={classes.body2}>
          <span className="ko">
            맥스웰피부과 원장
            <br />
            SNU 의료빅데이터센터
            <br />
            라임소사이어티 Founder
            <br />
            무브(주) CTO
            <br />
            서울대 의학과 및 대학원
          </span>
        </Typography>
        <Typography variant="body1" align="right" className={classes.body1}>
          <Link href="#" color="inherit" className={classes.prev}>
            <TrendingFlatIcon
              className={clsx(classes.icon, classes.iconPrev)}
            />{" "}
            Prev
          </Link>
          {" / "}
          <Link href="#" color="inherit" className={classes.next}>
            Next <TrendingFlatIcon className={classes.icon} />
          </Link>
        </Typography>
      </Box>
      <Box>
        <img
          src={"https://via.placeholder.com/410x630"}
          alt={"이호종"}
          className={classes.photo}
        />
      </Box>
    </Box>
  );
}
