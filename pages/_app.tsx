import React from "react";
import App from "next/app";
import {
  createOvermind,
  createOvermindSSR,
  rehydrate,
  Overmind,
} from "overmind";
import { Provider } from "overmind-react";
import { config } from "../store";

class MyApp extends App {
  private readonly overmind: Overmind<typeof config>;

  constructor(props: any) {
    super(props);

    const mutations = props.pageProps.mutations || [];

    if (typeof window !== "undefined") {
      this.overmind = createOvermind(config);
      this.overmind.actions.changePage(mutations);
    } else {
      this.overmind = createOvermindSSR(config);
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
        <Component {...props} />
      </Provider>
    );
  }
}

export default MyApp;
