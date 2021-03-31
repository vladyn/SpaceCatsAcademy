import React from "react";
import { useQuery, gql } from "@apollo/client";
import MarkDown from "../components/md-content";
import { Layout } from "../components";
import QueryResult from "../components/query-result";

/* The query */

const ABOUT = gql`
  query getPage($page: String) {
    getPage(page: $page) {
      title
      description
    }
  }
`;

/** About us page */

const About = () => {
  const { data, error, loading } = useQuery(ABOUT, {
    variables: {
      page: "about",
    },
  });

  return (
    <Layout fullWidth>
      <QueryResult error={error} data={data} loading={loading}>
        <h2>{data?.getPage?.title}</h2>
        <MarkDown content={data?.getPage?.description} />
      </QueryResult>
    </Layout>
  );
};

export default About;
