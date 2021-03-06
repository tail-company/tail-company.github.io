import { Box, Grid, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

import FullPageSlide from "components/FullPageSlide";
import PortfolioCompany from "components/PortfolioCompany";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    h1: {
      fontSize: 19 * 0.75,
      [theme.breakpoints.up("sm")]: {
        fontSize: 19,
      },
    },
    h2: {
      fontSize: 27,
      marginBottom: theme.spacing((6 * 27) / 68),
      [theme.breakpoints.up("sm")]: {
        fontSize: 44,
        marginBottom: theme.spacing((6 * 44) / 68),
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 68,
        marginBottom: theme.spacing(6),
      },
    },
    root: {
      position: "relative",
    },
    title: {
      position: "absolute",
      top: theme.spacing(2 * 0.6),
      right: 0,
      [theme.breakpoints.up("sm")]: {
        top: theme.spacing(2 * 0.8),
      },
      [theme.breakpoints.up("md")]: {
        top: theme.spacing(2),
      },
    },
  })
);

const companyList = [
  {
    name: "AFS",
    imageSrc: "/logo-afs.jpg",
    desc:
      "AI Image 기술을 통한 모발의 진단 및 모발이식 수술에 대한\n모든 문제를 해결하기 위해 현직 의료인, AI 엔지니어,\n의료기기 유통전문인이 함께 설립한 벤처기업입니다.",
    urlSrc: "https://afsmed.com",
  },
  {
    name: "EverEx",
    imageSrc: "/logo-ever-ex.jpg",
    desc:
      "근육운동에 어려움을 겪는 관절환자들이\n더욱 편하고 효과적이며 지속가능한 운동치료를\n할 수 있는 솔루션을 만드는 것을 비전으로 합니다.",
    urlSrc: "https://everex.kr",
  },
  {
    name: "Research Factory",
    imageSrc: "/logo-research-factory.jpg",
    desc:
      "의료인 양성과정에서 필요한 커뮤니티 및 의학논문\n플랫폼을 제공하며, 나아가 의료진 간 정식\nconsultation이 가능한 플랫폼을 지향합니다.",
    urlSrc: "https://rfactory.co.kr",
  },
];

export default function Portfolio() {
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
            Portfolio
          </Typography>
        </Box>
        <Box flexGrow={1} height={0} alignItems="center">
          <Box width="100%" height="100%" display="flex" alignItems="center">
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h2" align="center" className={classes.h2}>
                  We are medical accelerator<span className="yellow">.</span>
                </Typography>
              </Grid>
              {[...Array(companyList.length).keys()].map((companyIndex) => (
                <Grid item xs={6} md={4} key={companyIndex}>
                  <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                  >
                    <Box alignSelf="center">
                      <PortfolioCompany
                        desc={companyList[companyIndex].desc}
                        imageSrc={companyList[companyIndex].imageSrc}
                        name={companyList[companyIndex].name}
                        urlSrc={companyList[companyIndex].urlSrc}
                      />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </FullPageSlide>
  );
}
