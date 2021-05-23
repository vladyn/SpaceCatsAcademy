import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import { Router } from "@reach/router";
import Pages from "./pages";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Lato"],
  },
});

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "https://api.technologytalents.io/v1",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Router>
        <GlobalStyles path=":page" />
        <GlobalStyles path="/jobs/:page" />
        <GlobalStyles path="/" />
      </Router>
      <Pages />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
