import { Container, NoSsr } from "@material-ui/core";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import { FullPage, Slide } from "react-full-page";
import type _KeyboardEventHandler from "react-keyboard-event-handler";

import About from "components/About";
import Footer from "components/Footer";
import Header from "components/Header";
import Home from "components/Home";
import People from "components/People";
import Portfolio from "components/Portfolio";

const KeyboardEventHandler = dynamic<_KeyboardEventHandler>(
  () => import("react-keyboard-event-handler"),
  { ssr: false }
);

const pageCount = 4;

export default function Index() {
  const [page, setPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const fullPageRef = useRef(undefined);

  const afterChange = () => {
    setIsScrolling(false);
  };
  const beforeChange = ({ to }: { from: number; to: number }) => {
    setIsScrolling(true);
    setPage(to);
  };

  const onHeaderButtonClick = (page: number) => {
    if (isScrolling) return;

    fullPageRef?.current?.scrollToSlide(page);
    setPage(page);
  };

  const onKeyEvent = (key, e) => {
    if (isScrolling) return;

    if (["pageup", "up", "left"].includes(key) && page > 0) {
      const newPage = page - 1;
      fullPageRef?.current?.scrollToSlide(newPage);
      setPage(newPage);
    } else if (
      ["pagedown", "down", "right", "space"].includes(key) &&
      page < pageCount - 1
    ) {
      const newPage = page + 1;
      fullPageRef?.current?.scrollToSlide(newPage);
      setPage(newPage);
    } else if (["home"].includes(key) && page !== 0) {
      const newPage = 0;
      fullPageRef?.current?.scrollToSlide(newPage);
      setPage(newPage);
    } else if (["end"].includes(key) && page !== pageCount - 1) {
      const newPage = pageCount - 1;
      fullPageRef?.current?.scrollToSlide(newPage);
      setPage(newPage);
    }
  };

  return (
    <>
      <KeyboardEventHandler
        handleKeys={[
          "pageup",
          "pagedown",
          "up",
          "down",
          "left",
          "right",
          "space",
          "home",
          "end",
        ]}
        onKeyEvent={onKeyEvent}
      />
      <Header onButtonClick={onHeaderButtonClick} page={page} />
      <Container maxWidth="lg">
        <FullPage
          afterChange={afterChange}
          beforeChange={beforeChange}
          ref={fullPageRef}
        >
          <Slide>
            <Home />
          </Slide>
          <Slide>
            <About />
          </Slide>
          <Slide>
            <Portfolio />
          </Slide>
          <Slide>
            <People />
          </Slide>
        </FullPage>
      </Container>
      <Footer />
    </>
  );
}
