import React from "react";
import { Link } from "@reach/router";
import { colors } from "../styles";
import { Button } from "@apollo/space-kit/Button";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

/** Page headline display */

const PageHeadline = (props) => {
  const { title, subTitle, buttonOne, buttonTwo, verticallyAligned } = props;

  return (
    <Wrapper verticallyAligned={verticallyAligned} className="wrapper">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <ButtonsWrapper>
        {buttonOne && (
          <Button size="large" style={{ backgroundColor: "#F4EC8F" }}>
            <Link to={buttonOne?.link}>{buttonOne?.label}</Link>
          </Button>
        )}

        {buttonTwo && (
          <Button size="large">
            <Link to={buttonTwo?.link}>{buttonTwo?.label}</Link>
          </Button>
        )}
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default PageHeadline;

const Wrapper = styled.div((props) => ({
  textAlign: "center",
  display: props.verticallyAligned ? "flex" : "block",
  flexFlow: "column wrap",
  paddingBottom: props.verticallyAligned ? "0" : "9em",
  alignItems: props.verticallyAligned ? "center" : "inherit",
  alignSelf: "center",
  justifyContent: props.verticallyAligned ? "center" : "inherit",
  flex: props.verticallyAligned ? "1" : "auto",
  h1: {
    fontSize: "3em",
    fontWeight: 600,
    marginBottom: 20,
  },
  h2: {
    fontSize: "2em",
    fontStyle: "italic",
    marginBottom: 20,
  },
  button: {
    borderRadius: 26,
    minWidth: 200,
    margin: 28,
    a: {
      textDecoration: "none",
      color: "#1F1F1F",
      textTransform: "uppercase",
      fontFamily: '"Lato Light 300", sans-serif',
      fontWeight: "400",
      fontSize: ".85em",
    },
    ":last-child": {
      backgroundColor: colors.noColor,
      border: `5px solid ${colors.white}`,
      outline: "none",
    },
  },
}));

const ButtonsWrapper = styled.div({
  padding: "10px 0",
});

PageHeadline.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  verticallyAligned: PropTypes.bool,
  buttonOne: PropTypes.shape({
    link: PropTypes.string,
    label: PropTypes.string,
  }),
  buttonTwo: PropTypes.shape({
    link: PropTypes.string,
    label: PropTypes.string,
  }),
};
