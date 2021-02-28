import { Box, Button, Grid, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Image from "next/image";
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
      fontSize: 16,
    },
    button: {
      backgroundColor: "#f8e00e",
      borderRadius: 0,
      color: theme.palette.common.black,
      fontSize: 16,
      paddingTop: theme.spacing(1.5),
      paddingBottom: theme.spacing(1.5),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
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
      <Box width="100%" height={150} display="flex" justifyContent="center">
        <Box alignSelf="center" width="100%" height="100%" position="relative">
          <Image
            src={imageSrc}
            alt={name}
            layout="fill"
            objectFit="scale-down"
          />
        </Box>
      </Box>
      <Box width="100%" height={150} display="flex">
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
