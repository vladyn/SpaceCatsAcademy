import React from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useForm } from "react-hook-form";
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
import social_linkedIn from "../assets/logo_LinkedIn.png";
import social_fb from "../assets/Logo_FB.png";
import icon_letter from "../assets/Icon_letter.svg";
import icon_location from "../assets/Icon_location.svg";
// import icon_phone from "../assets/Icon_phone.svg";
import contact1x from "../assets/contact@technologytalents.png";
import contact2x from "../assets/contact@technologytalents@2x.png";
import contact3x from "../assets/contact@technologytalents@3x.png";

// Project specific styles
import { colors } from "../styles";

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

const JOBS = gql`
  query catDetails {
    spaceCats {
      title
      url_title
      entry_id
      description
      work_location
      seniority
    }
  }
`;

const APPLY = gql`
  mutation PostEntry($input: entryIntput) {
    createEntry(input: $input) {
      entry_id
    }
  }
`;

/** Get in Touch / Contact page */

const GetInTouch = () => {
  const { data: jobsData, error: jobsError, loading: jobsLoading } = useQuery(
    JOBS
  );

  const { data, error, loading } = useQuery(CONTACT, {
    variables: {
      page: "contact",
    },
  });

  const [createEntry, { error: formError, loading: formLoading }] = useMutation(
    APPLY,
    {}
  );

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    createEntry({
      variables: {
        input: {
          url_title: data.name.trim(),
          entry_date: Date.now().toString(),
          title: data?.name,
          channel_id: 3,
          ...data,
        },
      },
    });

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
                <p>Address: Sofia 1734, 8B, Prof. Stefan Dimitrov str.</p>
              </div>

              {/*<div>*/}
              {/*  <Icon src={icon_phone} alt="Call us" />*/}
              {/*</div>*/}

              <div>
                <a href="https://www.linkedin.com/company/technologytalents/">
                  <SocialIn src={social_linkedIn} alt="Follow us on LinkedIn" />
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/technologytalents/">
                  <SocialFb src={social_fb} alt="Follow us on Facebook" />
                </a>
              </div>
              <MarkDown content={page_content_right_column} />
            </aside>
            <section>
              <MarkDown content={page_content_row} />
              <MarkDown content={page_content_left_column} />

              {/* "handleSubmit" will validate your inputs before invoking
               "onSubmit" */}
              <FormWrapper>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* register your input into the hook by invoking the "register" function */}
                  <input
                    type="text"
                    defaultValue=""
                    placeholder="Your name"
                    {...register("name", { required: true })}
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.name && <span>This field is required</span>}

                  {/* include validation with required or other standard HTML validation rules */}
                  <input
                    type="email"
                    placeholder="Your e-mail"
                    defaultValue=""
                    {...register("mail", { required: true })}
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.mail && <span>This field is required</span>}

                  <select name="jobs" id="jobs" {...register("job_position")}>
                    <option
                      defaultValue={"selected"}
                      value="--"
                      label="Job application"
                    >
                      Job Application
                    </option>
                    {jobsData &&
                      jobsData?.spaceCats.map((data) => (
                        <option
                          value={data.url_title}
                          label={data.title}
                          key={data.entry_id}
                        >
                          data?.title
                        </option>
                      ))}
                    {jobsLoading && (
                      <option label={"loading the available positions"}>
                        ...loading the available positions
                      </option>
                    )}
                    {jobsError && (
                      <option label={"Error"}>Error: {jobsError}</option>
                    )}
                  </select>

                  <textarea
                    defaultValue="Type your motivation here"
                    {...register("motivation")}
                  />

                  <FieldGroup>
                    <input type="checkbox" />
                    <p>
                      I agree Technology Talents to store in its database the
                      personal data I have provided and use it in order to offer
                      me intermediary services to other partner employers for
                      open job positions that are relevant to me.
                    </p>
                  </FieldGroup>

                  <FieldGroup>
                    <input type="checkbox" />
                    <p>
                      I accept the terms and conditions described in the{" "}
                      <a href="https://technologytalents.io">Privacy Policy</a>
                    </p>
                  </FieldGroup>
                  {formLoading && <p>Loading...</p>}
                  {formError && <p>Error :( Please try again</p>}
                  <input type="submit" />
                </form>
              </FormWrapper>
            </section>
          </SplitSection>
        </QueryResult>
      </ContentSection>
    </Layout>
  );
};

export default GetInTouch;

const rounding = {
  margin: "1em 0",
  display: "block",
  width: "96%",
  borderRadius: 30,
  outline: "none",
  padding: "4px 8px",
  border: `2px solid ${colors.formInputNormal}`,
  ":focus": {
    borderColor: colors.formInputFocus,
  },
};

const FormWrapper = styled.section({
  "input[type=text], input[type=email]": {
    ...rounding,
  },
  textarea: {
    ...rounding,
  },
  select: {
    ...rounding,
  },
});

const FieldGroup = styled("div")`
  margin: 1em 0;
  display: flex;
"input[type=checkbox]" {
'flex-basis': "30px";
}
`;

const LogoBW = styled.img({
  width: 190,
  height: 41,
  display: "block",
  margin: "1em auto 3em 28%",
});

const Icon = styled("img")`
  display: block;
  margin: 1em auto;
`;

const SocialFb = styled("img")`
  display: block;
  margin: 1em auto;
  width: 123px;
  height: 46px;
`;

const SocialIn = styled("img")`
  display: block;
  margin: 1em auto;
  width: 134px;
  height: 34px;
`;

const ContactTT = styled("img")`
  display: block;
  margin: 10px auto;
  width: 284px;
  height: 15px;
`;
