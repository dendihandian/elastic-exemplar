import React, { Component } from "react";
import Head from "next/head";
import Aux from "../AuxHoc/AuxHoc";

export default class Layout extends Component {
  render() {
    return (
      <Aux>
        <Head>
          <title>Elastic Exemplar</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}
