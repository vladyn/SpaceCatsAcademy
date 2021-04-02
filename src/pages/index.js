import React, { Fragment } from "react";
import { Router } from "@reach/router";
/** importing our pages */
import Cats from "./cats";
import SpaceCat from "./space-cat";
import About from "./about";

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <About path="/" />
      <Cats path="/cats" />
      <SpaceCat path="/cat/:name" />
    </Router>
  );
}
