import React from "react";
import { Provider } from "react-redux";
import { BrowserHistory } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoApp from "./App";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={BrowserHistory}>
      <Route path="/:filter?" component={TodoApp} />
    </Router>
  </Provider>
);

export default Root;
