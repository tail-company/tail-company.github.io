import { Box, Button, Typography } from "@material-ui/core";
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
      fontFamily: "Noto Serif KR",
      fontSize: 12,
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
        height={150}
        mb={2}
        display="flex"
        justifyContent="center"
      >
        <Box alignSelf="center" width="100%" height="100%" position="relative">
          <img src={imageSrc} alt={name} className={classes.logo} />
        </Box>
      </Box>
      <Box width="100%" mb={4} display="flex">
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
    </Box>
  );
}
