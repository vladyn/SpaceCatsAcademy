import { Link } from "@reach/router";
import React from "react";
import { useQuery, gql } from "@apollo/client";
import DOMPurify from "dompurify";
import { Layout, ContentSection } from "../components";
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

/** Home page */

const Home = () => {
  const { data, error, loading } = useQuery(ABOUT, {
    variables: {
      page: "home",
    },
  });

  const dirty = data?.getPage?.description;
  const clean = DOMPurify.sanitize(dirty);

  return (
    <Layout fullWidth>
      <ContentSection>
        <QueryResult error={error} data={data} loading={loading}>
          <h2>{data?.getPage?.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: clean }} />
          <Link to="/cats">You can check out our Favorites here.</Link>
        </QueryResult>
      </ContentSection>
    </Layout>
  );
};

export default Home;
