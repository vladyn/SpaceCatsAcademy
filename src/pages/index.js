import React, { Fragment } from "react";
import { Router } from "@reach/router";
/** importing our pages */
import Cats from "./cats";
import SpaceCat from "./space-cat";

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Cats path="/" />
      <SpaceCat catName={"the-lazy-gonzo"} path="/cat" />
    </Router>
  );
}
