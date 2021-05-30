import { Button } from "@apollo/space-kit/Button";
import { useNavigate } from "@reach/router";
import React from "react";
import { useQuery, gql } from "@apollo/client";
import DOMPurify from "dompurify";
import styled from "@emotion/styled";
import { Layout, ContentSection } from "../components";
import PageHeadline from "../components/page-headline";
import QueryResult from "../components/query-result";
import MarkDown from "../components/md-content";
import SplitSection from "../components/split-section";
import { buttonSection } from "../styles";

/* The query */

const CANDIDATES = gql`
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

/** CandiDates page */

const Candidates = () => {
  const { data, error, loading } = useQuery(CANDIDATES, {
    variables: {
      page: "candidates",
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
  const navigate = useNavigate();
  const jumpTo = (page) => navigate(page);

  return (
    <Layout fullWidth>
      <ContentSection>
        <QueryResult error={error} data={data} loading={loading}>
          <PageHeadline
            title={data?.getPage?.heading_one}
            subTitle={data?.getPage?.heading_two}
          />
          <SplitSection>
            <div>
              <MarkDown content={page_content_left_column} />
              <ButtonWrapperTwo>
                <Button size="large" onClick={() => jumpTo("/contact")}>
                  Contact Us
                </Button>
              </ButtonWrapperTwo>
            </div>
            <div>
              <MarkDown content={page_content_right_column} />
              <ButtonWrapperOne>
                <Button size="large" onClick={() => jumpTo("/jobs")}>
                  See Jobs
                </Button>
              </ButtonWrapperOne>
            </div>
          </SplitSection>
          <MarkDown content={page_content_row} />
        </QueryResult>
      </ContentSection>
    </Layout>
  );
};

export default Candidates;

const ButtonWrapperOne = styled.div({
  marginTop: 20,
  ...buttonSection("cardTypeTwo"),
});

const ButtonWrapperTwo = styled.div({
  marginTop: 20,
  ...buttonSection("cardTypeOne"),
});
