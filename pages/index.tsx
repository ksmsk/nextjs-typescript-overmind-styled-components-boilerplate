import { GetStaticProps, NextPage } from "next";
import { createOvermindSSR } from "overmind";
import React from "react";
import { config } from "../store";
import { Header } from "../components/Header";
import { Pages } from "../store/base/state";
import { hydrator } from "../utils/helpers";

type Props = {};

export const getStaticProps: GetStaticProps = async () => {
  const overmind = createOvermindSSR(config);
  overmind.state.page = Pages.index;

  return {
    props: { mutations: hydrator(overmind) },
  };
};

const IndexPage: NextPage<Props> = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default IndexPage;
