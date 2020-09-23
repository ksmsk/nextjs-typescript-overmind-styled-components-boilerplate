import { GetStaticProps, NextPage } from "next";
import { createOvermindSSR } from "overmind";
import React from "react";
import { storeConfig } from "../store";
import { Header } from "../components/Header";
import { Pages } from "../store/base/state";

type Props = {};

export const getStaticProps: GetStaticProps = async () => {
  const overmind = createOvermindSSR(storeConfig);
  overmind.state.page = Pages.index;

  return {
    props: { mutations: overmind.hydrate() },
  };
};

const IndexPage: NextPage<Props> = () => {
  return (
    <div>
      <Header titleColor="navy" />
    </div>
  );
};

export default IndexPage;
