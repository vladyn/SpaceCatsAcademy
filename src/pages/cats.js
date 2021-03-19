import React from "react";
import { Layout } from "../components";
import { useQuery, gql } from "@apollo/client";
import TrackCard from "../containers/track-card";

/**
 * Cats Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const SPACECATS = gql`
  query catDetails {
    spaceCats {
      name
      age
      id
      photo
      missions {
        id
        name
        description
      }
    }
  }
`;

const Cats = () => {
  const { loading, error, data } = useQuery(SPACECATS);

  if (loading) return <p>Loading...</p>;
  if (error) return <strong>Error! {error.message}</strong>;
  return (
    <Layout grid>
      {data?.spaceCats?.map((cat) => (
        <TrackCard key={cat.id} track={cat} />
      ))}
    </Layout>
  );
};

export default Cats;
