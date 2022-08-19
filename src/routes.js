import React from "react";
import { Router, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import { history } from "./managers/history";
import App from "./App";
import ProjectDetails from "./components/projectDetails/index";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/"} component={App} />
        <Route exact path={"/project-details"} component={ProjectDetails} />
        <Redirect exact from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
