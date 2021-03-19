import React, { Fragment } from "react";
import { Router } from "@reach/router";
/** importing our pages */
import Cats from "./cats";

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <Cats path="/" />
    </Router>
  );
}
