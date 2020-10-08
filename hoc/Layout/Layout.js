import React, { Component } from "react";
import Head from "next/head";
import Aux from "../AuxHoc/AuxHoc";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppDrawer } from "../../components/AppDrawer/AppDrawer";

export default class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Head>
          <title>Elastic Exemplar</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <AppHeader drawerToggleClicked={this.sideDrawerToggleHandler} />
        <AppDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}
