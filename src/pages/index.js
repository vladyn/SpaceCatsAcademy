import React, { Fragment } from "react";
import { Router } from "@reach/router";
/** importing our pages */
import GetInTouch from "./cet-in-touch";
import Jobs from "./jobs";
import SpaceCat from "./space-cat";
import About from "./about";
import Home from "./home";
import Business from "./business";
import Candidates from "./canditates";

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Home path="/" />
      <About path="/about" />
      <Business path="/business" />
      <Candidates path="/candidates" />
      <GetInTouch path="/contact" />
      <Jobs path="/jobs" />
      <SpaceCat path="/jobs/:name" />
    </Router>
  );
}
