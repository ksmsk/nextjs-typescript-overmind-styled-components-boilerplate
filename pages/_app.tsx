import React from "react";
import App from "next/app";
import {
  createOvermind,
  createOvermindSSR,
  rehydrate,
  Overmind,
} from "overmind";
import { Provider } from "overmind-react";
import { storeConfig } from "../store";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";

class MyApp extends App {
  private readonly overmind: Overmind<typeof storeConfig>;

  constructor(props: any) {
    super(props);

    const mutations = props.pageProps.mutations || [];

    if (typeof window !== "undefined") {
      this.overmind = createOvermind(storeConfig);
      this.overmind.actions.changePage(mutations);
    } else {
      this.overmind = createOvermindSSR(storeConfig);
      rehydrate(this.overmind.state, mutations);
    }
  }

  componentDidUpdate() {
    this.overmind.actions.changePage(this.props.pageProps.mutations || []);
  }

  render() {
    const { Component } = this.props;
    const { mutations, ...props } = this.props.pageProps;

    return (
      <Provider value={this.overmind}>
        <CacheProvider value={cache}>
          <Component {...props} />
        </CacheProvider>
      </Provider>
    );
  }
}

export default MyApp;
