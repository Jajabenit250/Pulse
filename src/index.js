import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import SubmitRating from "./components/submitRating/SubmitRating";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import SignInSingUpWrapper from "./components/Login/pulseWraper";
import Signup from "./components/signup/Signup";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/submitRating">
        <SubmitRating />
      </Route>
      <Route path="/">
        <SignInSingUpWrapper />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();