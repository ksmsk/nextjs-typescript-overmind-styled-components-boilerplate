import { GetStaticProps, NextPage } from "next";
import { createOvermindSSR } from "overmind";
import React from "react";
import { storeConfig } from "@shared/store";
import { Header } from "@shared/components/Header";
import { Pages } from "@shared/store/base/state";

type Props = {};

export const getStaticProps: GetStaticProps = async () => {
  const overmind = createOvermindSSR(storeConfig);
  overmind.state.page = Pages.about;

  return {
    props: { mutations: overmind.hydrate() },
  };
};

const AboutPage: NextPage<Props> = () => {
  return (
    <div>
      <Header titleColor="tomato" />
    </div>
  );
};

export default AboutPage;
