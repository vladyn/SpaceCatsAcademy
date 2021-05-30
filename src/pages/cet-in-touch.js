import React from "react";
import { useQuery, gql } from "@apollo/client";
import DOMPurify from "dompurify";
import { Layout, ContentSection } from "../components";
import PageHeadline from "../components/page-headline";
import QueryResult from "../components/query-result";
import MarkDown from "../components/md-content";
import SplitSection from "../components/split-section";
import styled from "@emotion/styled";
// import the assets
import tt_logo_b from "../assets/tt_Logo_B.png";
import tt_logo_b_2x from "../assets/tt_Logo_B@2x.png";
import tt_logo_b_3x from "../assets/tt_Logo_B@3x.png";
import icon_letter from "../assets/Icon_letter.svg";
import icon_location from "../assets/Icon_location.svg";
import icon_phone from "../assets/Icon_phone.svg";
import contact1x from "../assets/contact@technologytalents.png";
import contact2x from "../assets/contact@technologytalents@2x.png";
import contact3x from "../assets/contact@technologytalents@3x.png";

/* The query */

const CONTACT = gql`
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

/** Get in Touch / Contact page */

const GetInTouch = () => {
  const { data, error, loading } = useQuery(CONTACT, {
    variables: {
      page: "contact",
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
          />
          <SplitSection direction="reverse">
            <aside>
              <LogoBW
                width="190px"
                height="41px"
                src={tt_logo_b}
                srcSet={`${tt_logo_b_2x} 2x, ${tt_logo_b_3x} 3x`}
              />
              <div>
                <Icon src={icon_letter} alt="Contact us" />
                <ContactTT
                  src={contact1x}
                  srcSet={`${contact2x} 2x, ${contact3x} 3x`}
                />
              </div>
              <div>
                <Icon src={icon_location} alt="Find us" />
                <p>1505 Sofia 48 Kademlia Str., floor 1</p>
              </div>

              <div>
                <Icon src={icon_phone} alt="Call us" />
                <p>+359 87 888 9905</p>
              </div>
              <MarkDown content={page_content_right_column} />
            </aside>
            <section>
              <MarkDown content={page_content_row} />
              <MarkDown content={page_content_left_column} />
            </section>
          </SplitSection>
        </QueryResult>
      </ContentSection>
    </Layout>
  );
};

export default GetInTouch;

const LogoBW = styled.img({
  width: 190,
  height: 41,
  display: "block",
  margin: "1em auto 3em 3.5em",
});

const Icon = styled("img")`
  display: block;
  margin: 1em auto;
`;

const ContactTT = styled("img")`
  display: block;
  margin: 10px auto;
  width: 304px;
  height: 49px;
`;
