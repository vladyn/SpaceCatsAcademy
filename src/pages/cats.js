import React from "react";
import { Layout } from "../components";
import { useQuery, gql } from "@apollo/client";
import CatCard from "../containers/cat-card";
import QueryResult from '../components/query-result';

/**
 * Cats Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const SPACECATS = gql`
  query catDetails {
    spaceCats {
      title
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

const Cats = () => {
  const { loading, error, data } = useQuery(SPACECATS);
  return (
    <Layout grid>
      <QueryResult error={error} data={data} loading={loading}>
        {data?.spaceCats?.map((cat) => (
          <CatCard key={cat.entry_id} track={cat} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Cats;
