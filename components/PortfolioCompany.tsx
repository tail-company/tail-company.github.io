import { Box, Button, Hidden, Link, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";

interface PortfolioCompanyProps {
  desc?: string;
  imageSrc?: string;
  name: string;
  urlSrc?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body2: {
      // NOTE ko 따로 줘도 안되서 추가함
      fontFamily: "Noto Serif KR, serif",
      fontSize: 12,
      height: 70,
      whiteSpace: "pre-line",
    },
    button: {
      backgroundColor: "#f8e00e",
      borderRadius: 0,
      color: theme.palette.common.black,
      fontSize: 12,
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    logo: {
      height: "100%",
      objectFit: "scale-down",
      width: "100%",
    },
    logoBox: {
      height: 150,
      marginBottom: theme.spacing(2),
      [theme.breakpoints.only("xs")]: {
        height: 100,
        marginBottom: theme.spacing(1),
      },
    },
  })
);

export default function PortfolioCompany({
  desc,
  imageSrc,
  name,
  urlSrc,
}: PortfolioCompanyProps) {
  const classes = useStyles();

  return (
    <Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        className={classes.logoBox}
      >
        <Box alignSelf="center" width="100%" height="100%" position="relative">
          <Link href={urlSrc} target="_blank">
            <img src={imageSrc} alt={name} className={classes.logo} />
          </Link>
        </Box>
      </Box>
      <Hidden xsDown>
        <Box width="100%" mb={1.5} display="flex">
          <Box alignSelf="center">
            <Typography
              variant="body2"
              align="center"
              className={clsx("ko", classes.body2)}
            >
              {desc}
            </Typography>
          </Box>
        </Box>
        <Box width="100%" display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="default"
            disableElevation
            className={classes.button}
            href={urlSrc}
            target="_blank"
          >
            Download
          </Button>
        </Box>
      </Hidden>
    </Box>
  );
}
