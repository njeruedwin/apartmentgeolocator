import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Home from "./pages/Home";
import DummyMap from "./pages/DummyMap";
import Map from "./pages/Map";
import Apartment from "./pages/Apartment";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/map" component={Map} exact />
      <Route path="/dummymap" component={DummyMap} exact />
      <Route path="/map/apartment" component={Apartment} />
    </Switch>
  </Router>,

  document.getElementById("root")
);
