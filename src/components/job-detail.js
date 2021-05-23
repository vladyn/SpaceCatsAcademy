import { CardSection } from "@apollo/space-kit/Card";
import React from "react";
import styled from "@emotion/styled";
import { colors, Button, IconRun } from "../styles";
import { Link } from "@reach/router";
import ContentSection from "./content-section";
import MarkDown from "./md-content";

/**
 * Track Detail component renders the main content of a given track:
 * author, length, number of views, missions list, among other things.
 * It provides access to the first module of the track.
 */
const JobDetail = ({ cat }) => {
  const { description, missions, url_title } = cat; // Consider: adding a feature to count the number of views

  return (
    <ContentSection>
      <JobDetails>
        <DetailRow>
          <MarkDown content={description} />
        </DetailRow>
        <ModuleListContainer>
          <DetailRow>
            <DetailItem>
              {missions.map((mission) => (
                <CardSection
                  key={mission.row_id}
                  heading={mission.name}
                  description={mission.description}
                />
              ))}
            </DetailItem>
          </DetailRow>
          <DetailItem>
            <StyledLink to="/jobs">
              <Button
                icon={<IconRun width="20px" />}
                color={colors.pink.base}
                size="large"
              >
                Close
              </Button>
            </StyledLink>
            <StyledLink to={`/jobs/${url_title}`}>
              <Button
                icon={<IconRun width="20px" />}
                color={colors.pink.base}
                size="large"
              >
                Apply
              </Button>
            </StyledLink>
          </DetailItem>
        </ModuleListContainer>
      </JobDetails>
    </ContentSection>
  );
};

export default JobDetail;

/** Track detail styled components */
const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "white",
});

const JobDetails = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 20,
  borderRadius: 4,
  marginBottom: 30,
  border: `solid 1px ${colors.silver.dark}`,
  backgroundColor: colors.silver.lighter,
  h1: {
    width: "100%",
    marginBottom: 5,
  },
  h4: {
    fontSize: "1.2em",
    marginBottom: 5,
    color: colors.text,
  },
});

const DetailRow = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "start",
  width: "100%",
  paddingBottom: 20,
  marginBottom: 20,
  borderBottom: `solid 1px ${colors.silver.dark}`,
});

const DetailItem = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "start",
  justifyContent: "space-between",
  color: colors.textSecondary,
  alignSelf: "flex-start",
});

const ModuleListContainer = styled.div({
  width: "100%",
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    marginTop: 5,
    li: {
      fontSize: "1em",
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: 2,
    },
  },
});
