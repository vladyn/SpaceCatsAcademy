import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
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

console.log(process.env.NODE_ENV);

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <GlobalStyles />
      <Pages />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
