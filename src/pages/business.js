import React from "react";
import { useQuery, gql } from "@apollo/client";
import DOMPurify from "dompurify";
import { Layout, ContentSection } from "../components";
import PageHeadline from "../components/page-headline";
import QueryResult from "../components/query-result";
import MarkDown from "../components/md-content";
import SplitSection from "../components/split-section";
import icon_talk from "../assets/Icon_Talk.svg";

/* The query */

const BUSINESS = gql`
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

/** Business page */

const Business = () => {
  const { data, error, loading } = useQuery(BUSINESS, {
    variables: {
      page: "business",
    },
  });

  const page_content_row_dirty = data?.getPage?.page_content_row;
  const page_content_row = DOMPurify.sanitize(page_content_row_dirty);
  const page_content_left_column_dirty =
    data?.getPage?.page_content_left_column;
  const page_content_left_column = DOMPurify.sanitize(
    page_content_left_column_dirty
  );
  const page_content_right_column_dirty =
    data?.getPage?.page_content_right_column;
  const page_content_right_column = DOMPurify.sanitize(
    page_content_right_column_dirty
  );

  return (
    <Layout fullWidth>
      <ContentSection>
        <QueryResult error={error} data={data} loading={loading}>
          <PageHeadline
            title={data?.getPage?.heading_one}
            subTitle={data?.getPage?.heading_two}
            buttonTwo={{ link: "/contact", label: "Contact Us" }}
          />
          <SplitSection iconLeft={icon_talk}>
            <MarkDown content={page_content_left_column} />
            <MarkDown content={page_content_right_column} />
          </SplitSection>

          {page_content_row && <MarkDown content={page_content_row} />}
        </QueryResult>
      </ContentSection>
    </Layout>
  );
};

export default Business;
