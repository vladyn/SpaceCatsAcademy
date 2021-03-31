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
      channel_id
      author_id
      entry_date
      edit_date
      expiration_date
      author_id
      title
      url_title
      entry_id
      photo
      description
      missions {
        row_id
        name
        description
      }
    }
  }
`;

const SpaceCat = ({ name }) => {
  const { loading, error, data } = useQuery(SPACECATS, {
    variables: {
      catName: name,
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
