import React from "react";
import { useQuery, gql } from "@apollo/client";
import DOMPurify from "dompurify";
import { Layout, ContentSection } from "../components";
import QueryResult from "../components/query-result";
import PageHeadline from "../components/page-headline";

/* The query */

const HOME = gql`
  query getPage($page: String) {
    getPage(page: $page) {
      title
      heading_one
      heading_two
      page_content_left_column
      page_content_right_column
      page_content_row
    }
  }
`;

/** Home page */

const Home = () => {
  const { data, error, loading } = useQuery(HOME, {
    variables: {
      page: "home",
    },
  });

  const content_row_dirty = data?.getPage?.page_content_row;
  const page_content_row = DOMPurify.sanitize(content_row_dirty);

  return (
    <Layout fullWidth grid>
      <ContentSection>
        <QueryResult error={error} data={data} loading={loading}>
          <PageHeadline
            title={data?.getPage?.heading_one}
            subTitle={data?.getPage?.heading_two}
            buttonOne={{ link: "/jobs", label: "See jobs" }}
            buttonTwo={{ link: "/contact", label: "Contact Us" }}
            fullHeight
          />
          <div
            style={{ "text-align": "center" }}
            dangerouslySetInnerHTML={{ __html: page_content_row }}
          />
        </QueryResult>
      </ContentSection>
    </Layout>
  );
};

export default Home;
