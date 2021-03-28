import React from "react";
import { Layout } from "../components";
import { useQuery, gql } from "@apollo/client";
import CatDetail from "../components/cat-details";
import QueryResult from "../components/query-result";

/**
 * Cats Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const SPACECATS = gql`
  query getSirma($catName: String) {
    getCat(name: $catName) {
      title
      description
      photo
      missions {
        row_id
        description
      }
    }
  }
`;

const SpaceCat = ({ catName }) => {
  const { loading, error, data } = useQuery(SPACECATS, {
    variables: {
      catName,
    },
  });

  return (
    <Layout fullWidth>
      <QueryResult error={error} data={data} loading={loading}>
        <CatDetail track={data?.getCat}>
          <h4>{data?.getCat?.title}</h4>
        </CatDetail>
      </QueryResult>
    </Layout>
  );
};

export default SpaceCat;
