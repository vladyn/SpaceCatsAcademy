import React from "react";
import { Layout } from "../components";
import { useQuery, gql } from "@apollo/client";
import JobCard from "../containers/job-card";
import QueryResult from "../components/query-result";
import { randomIndex } from "../utils/helpers";

/**
 * Jobs page
 * We display a grid of jobs fetched with useQuery.
 */

const JOBS = gql`
  query catDetails {
    spaceCats {
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
      work_location
      seniority
      missions {
        row_id
        name
        description
      }
    }
  }
`;

const cardColors = [
  "cardTypeOne",
  "cardTypeTwo",
  "cardTypeThree",
  "cardTypeFour",
];

const Jobs = () => {
  const { loading, error, data } = useQuery(JOBS);
  return (
    <Layout grid>
      <QueryResult error={error} data={data} loading={loading}>
        {data?.spaceCats?.map((job) => (
          <JobCard
            key={job.entry_id}
            details={job}
            color={randomIndex(cardColors)}
          />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Jobs;
