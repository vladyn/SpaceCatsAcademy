import React from "react";
import { useQuery, gql } from "@apollo/client";
import DOMPurify from "dompurify";
import { Layout, ContentSection } from "../components";
import PageHeadline from "../components/page-headline";
import QueryResult from "../components/query-result";
import MarkDown from "../components/md-content";
import SplitSection from "../components/split-section";
import icon_union from "../assets/Icon_Union.svg";
import icon_check from "../assets/Icon_Check.svg";

/* The query */

const ABOUT = gql`
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

/** About us page */
const About = () => {
  const { data, error, loading } = useQuery(ABOUT, {
    variables: {
      page: "about",
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
            buttonTwo={{ link: "asd", label: "Get to know us" }}
          />
          <ContentSection>
            <SplitSection iconLeft={icon_union} iconRight={icon_check}>
              <MarkDown content={page_content_left_column} />
              <MarkDown content={page_content_right_column} />
            </SplitSection>

            {page_content_row && <MarkDown content={page_content_row} />}
          </ContentSection>
        </QueryResult>
      </ContentSection>
    </Layout>
  );
};

export default About;
