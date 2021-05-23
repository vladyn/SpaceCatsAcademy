import { CardSection } from "@apollo/space-kit/Card";
import { useNavigate } from "@reach/router";
import React from "react";
import styled from "@emotion/styled";
import { colors, mq } from "../styles";

/**
 * Track Card component renders basic info in a job-card.js format
 * for each track populating the tracks grid homepage.
 */
const JobCard = ({ details }) => {
  const {
    entry_id,
    url_title,
    entry_date,
    title,
    missions,
    work_location: location,
  } = details;

  const navigate = useNavigate();
  const getJob = () => navigate(`/jobs/${url_title}`);

  const humanDate = new Date(entry_date).toLocaleDateString("en-EN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <CardContainer id={entry_id} onClick={getJob}>
      <CardContent>
        <CardBody>
          <CardTitle>{title || ""}</CardTitle>
          <CardSubTitle>{location}</CardSubTitle>
          {missions.map((mission, index) => {
            if (index > 2) {
              return null;
            }
            return (
              <CardSection
                key={mission.row_id}
                heading={mission.name}
                description={mission.description}
              />
            );
          })}
          <CardFooter>
            <CardDate>{humanDate}</CardDate>
          </CardFooter>
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

export default JobCard;

/** Job Card styled components */
const CardContainer = styled.div({
  borderRadius: 5,
  color: colors.text,
  backgroundSize: "cover",
  backgroundColor: "white",
  boxShadow: "0px 4px 30px 0px rgba(174,174,129,0.3)",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  transition:
    "background-color 0.1s, border-color 0.2ms, border-width 0.2s, box-shadow 0.7s",
  [mq[0]]: {
    width: "90%",
  },
  [mq[1]]: {
    width: "47%",
  },
  [mq[2]]: {
    width: "31%",
  },
  height: 380,
  margin: 10,
  overflow: "hidden",
  position: "relative",
  padding: 18,
  ":hover": {
    backgroundColor: colors.cardHoverBgColor,
    border: `5px solid ${colors.cardHoverBorderColor}`,
    boxShadow: "0px 4px 20px 0px rgba(174,174,129,0.7)",
    color: colors.grey.darker,
    padding: 13,
  },
  cursor: "pointer",
});

const CardContent = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  height: "100%",
});

const CardTitle = styled.h3({
  fontSize: "1.4em",
  lineHeight: "1em",
  fontWeight: 700,
  color: colors.text,
  flex: "0 1 auto",
});

const CardSubTitle = styled.h4({
  fontSize: "1em",
  lineHeight: "1em",
  color: colors.text,
  flex: "0 1 auto",
});

const CardBody = styled.div({
  flex: 1,
  display: "flex",
  color: colors.textSecondary,
  flexDirection: "column",
  justifyContent: "space-between",
  section: {
    marginTop: 12,
  },
});

const CardFooter = styled.div({
  display: "flex",
  flexDirection: "Row",
});

const CardDate = styled.time({
  marginTop: "auto",
});
