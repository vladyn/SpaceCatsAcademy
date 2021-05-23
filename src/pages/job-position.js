import React from "react";
import { Layout } from "../components";
import { useQuery, gql } from "@apollo/client";
import JobDetail from "../components/job-detail";
import QueryResult from "../components/query-result";

/**
 * Cats Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const JOB = gql`
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

const JobPosition = ({ name }) => {
  const { loading, error, data } = useQuery(JOB, {
    variables: {
      catName: name,
    },
  });

  return (
    <Layout fullWidth>
      <QueryResult error={error} data={data} loading={loading}>
        <JobDetail cat={data?.getCat} />
      </QueryResult>
    </Layout>
  );
};

export default JobPosition;
