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
      fontSize: 12,
      height: 95,
      marginBottom: theme.spacing(6),
      whiteSpace: "pre-line",
    },
    body2: {
      fontSize: 16,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(0.5),
    },
    h4: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: theme.spacing(4),
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
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(4),
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
            Next <TrendingFlatIcon className={classes.icon} />
          </Link>
        </Typography>
      </Box>
      <Box width={300} height={450} className={classes.photoBox}>
        <img src={imageSrc} alt={name} className={classes.photo} />
      </Box>
    </Box>
  );
}
