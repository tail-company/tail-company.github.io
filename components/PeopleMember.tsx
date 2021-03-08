import { Box, Link, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import clsx from "clsx";
import React from "react";

interface PeopleMemberProps {
  career?: string;
  imageSrc?: string;
  name: string;
  onNextClick: (e: React.MouseEvent<HTMLElement>) => void;
  onPrevClick: (e: React.MouseEvent<HTMLElement>) => void;
  position: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body1: {
      fontSize: 10.5,
      height: (95 * 10.5) / 12,
      marginBottom: theme.spacing(4),
      whiteSpace: "pre-line",
      [theme.breakpoints.up("sm")]: {
        fontSize: 12,
        height: 95,
        marginBottom: theme.spacing(5),
      },
      [theme.breakpoints.up("md")]: {
        marginBottom: theme.spacing(6),
      },
    },
    body2: {
      fontSize: 16 * 0.75,
      fontWeight: "bold",
      [theme.breakpoints.only("xs")]: {
        paddingLeft: theme.spacing(2),
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 16,
      },
    },
    h3: {
      fontSize: 18 * 0.75,
      fontWeight: "bold",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(0.5),
      [theme.breakpoints.up("sm")]: {
        fontSize: 18,
        marginTop: theme.spacing(3),
      },
      [theme.breakpoints.up("md")]: {
        marginTop: theme.spacing(4),
      },
    },
    h4: {
      fontSize: 18 * 0.75,
      fontWeight: "bold",
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        fontSize: 18,
        marginBottom: theme.spacing(3),
      },
      [theme.breakpoints.up("md")]: {
        marginBottom: theme.spacing(4),
      },
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
      borderRadius: 5,
      height: "100%",
      objectFit: "cover",
      width: "100%",
    },
    photoBox: {
      height: 450 * 0.75 * 0.65,
      marginBottom: theme.spacing(2 * 0.5 * 1),
      marginLeft: theme.spacing(3),
      width: 300 * 0.75 * 0.65,
      [theme.breakpoints.up("sm")]: {
        height: 450 * 0.75,
        marginBottom: theme.spacing(2 * 0.5),
        marginLeft: theme.spacing(4),
        width: 300 * 0.75,
      },
      [theme.breakpoints.up("md")]: {
        height: 450,
        marginBottom: theme.spacing(2),
        width: 300,
      },
    },
  })
);

export default function PeopleMember({
  career,
  imageSrc,
  name,
  onNextClick,
  onPrevClick,
  position,
}: PeopleMemberProps) {
  const classes = useStyles();

  return (
    <Box display="flex">
      <Box>
        <Typography variant="h3" align="right" className={classes.h3}>
          <span className="ko">{name}</span>
        </Typography>
        <Typography variant="h4" align="right" className={classes.h4}>
          {position}
        </Typography>
        <Typography variant="body1" align="right" className={classes.body1}>
          <span className="ko">{career}</span>
        </Typography>
        <Typography variant="body2" align="right" className={classes.body2}>
          <Link
            href="#"
            color="inherit"
            className={classes.prev}
            onClick={onPrevClick}
          >
            <TrendingFlatIcon
              fontSize="inherit"
              className={clsx(classes.icon, classes.iconPrev)}
            />{" "}
            Prev
          </Link>
          {" / "}
          <Link
            href="#"
            color="inherit"
            className={classes.next}
            onClick={onNextClick}
          >
            Next{" "}
            <TrendingFlatIcon fontSize="inherit" className={classes.icon} />
          </Link>
        </Typography>
      </Box>
      <Box className={classes.photoBox}>
        <img src={imageSrc} alt={name} className={classes.photo} />
      </Box>
    </Box>
  );
}
