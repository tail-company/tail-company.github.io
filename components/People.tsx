import { Box, Hidden, Typography } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

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
      fontSize: 19 * 0.75,
      [theme.breakpoints.up("sm")]: {
        fontSize: 19,
      },
    },
    h2: {
      fontSize: 72 * 0.5 * 0.5,
      [theme.breakpoints.only("xs")]: {
        marginBottom: theme.spacing(3),
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: 72 * 0.5,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 72,
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

const memberList = [
  {
    name: "이호종",
    position: "Managing Partner",
    career:
      "(현)맥스웰피부과 원장\n(현)서울대 의료빅데이터센터\n(전)라임소사이어티 Founder\n(전)무브 CTO\n서울대 의학과 및 대학원",
    imageSrc: "/photo-hojong.jpg",
  },
  {
    name: "지승범",
    position: "Managing Partner",
    career:
      "(전)화이브라더스코리아 CEO\n(전)화이인베스트먼트 CEO\n(전)KTB Investment\n(전)KPMG FAS",
    imageSrc: "/photo-jayji.png",
  },
  {
    name: "김승수",
    position: "Partner",
    career: "(현)미유치과 원장\n서울대 치의학대학원 석사",
    imageSrc: "/photo-seungsu.png",
  },
  {
    name: "배남석",
    position: "Auditor/Compliance Officer",
    career: "(전)BNK 부산은행 부행장\n(전)BNK 신용정보 대표이사",
    imageSrc: "/photo-namseok.jpg",
  },
  {
    name: "배영진",
    position: "Advisor",
    career: "LINE Games CSO/부대표",
    imageSrc: "/photo-bae.jpg",
  },
  {
    name: "이형철",
    position: "Advisor",
    career:
      "서울대 마취통증의학과 조교수\n서울대 의과학과 마취통증의학 박사\n서울대 의학과\n서울대 공과대학\nVital Recorder 개발",
    imageSrc: "/photo-lucid80.jpg",
  },
  {
    name: "안상진",
    position: "Advisor",
    career:
      "인제대 의학과 약리학교실 조교수\n서울대 의과학과 약리학 박사\n서울대 의학과\n트윗매니저 개발",
    imageSrc: "/photo-mahler83.jpg",
  },
  {
    name: "강병희",
    position: "Advisor",
    career: "서울대 의과학과 생화학 박사\n서울대 의학전문대학원",
    imageSrc: "/photo-bh.jpg",
  },
  {
    name: "이승복",
    position: "Advisor",
    career: "서울대 의과학과 생화학 박사\n서울대 의학과",
    imageSrc: "/photo-sb.png",
  },
];

export default function People() {
  const classes = useStyles();
  const [memberIndex, setMemberIndex] = useState(0);

  const onPrevClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setMemberIndex((memberIndex - 1 + memberList.length) % memberList.length);
  };

  const onNextClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setMemberIndex((memberIndex + 1) % memberList.length);
  };

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
            <Hidden smUp>
              <Box width="100%" display="flex" justifyContent="flex-end">
                <Box alignSelf="center">
                  <Typography variant="h2" align="right" className={classes.h2}>
                    Medical Doctors{" "}
                    <strong>
                      Entrepreneurship<span className="yellow">.</span>
                    </strong>
                  </Typography>
                  <PeopleMember
                    name={memberList[memberIndex].name}
                    position={memberList[memberIndex].position}
                    career={memberList[memberIndex].career}
                    imageSrc={memberList[memberIndex].imageSrc}
                    onPrevClick={onPrevClick}
                    onNextClick={onNextClick}
                  />
                </Box>
              </Box>
            </Hidden>
            <Hidden xsDown>
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
                  <PeopleMember
                    name={memberList[memberIndex].name}
                    position={memberList[memberIndex].position}
                    career={memberList[memberIndex].career}
                    imageSrc={memberList[memberIndex].imageSrc}
                    onPrevClick={onPrevClick}
                    onNextClick={onNextClick}
                  />
                </Box>
              </Box>
            </Hidden>
          </Box>
        </Box>
      </Box>
    </FullPageSlide>
  );
}
