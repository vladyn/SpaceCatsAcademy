import { Button } from "@apollo/space-kit/Button";
import { Link } from "@reach/router";
import React from "react";
import styled from "@emotion/styled";

// import { widths, colors } from "../styles";
import PropTypes from "prop-types";

/**
 * Two column layout on desktop
 */

const SplitSection = ({
  children,
  iconLeft,
  iconRight,
  buttonOne,
  buttonTwo,
}) => {
  return (
    <ContentDiv iconLeft={iconLeft} iconRight={iconRight}>
      {children}

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
    </ContentDiv>
  );
};

export default SplitSection;

const ContentDiv = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  div: {
    paddingTop: `${props.iconLeft || props.iconRight ? "105px" : "20px"}`,
    display: "flex",
    flexDirection: "column",
    flexBasis: "100%",
    flex: "1",
    ":first-of-type": {
      backgroundImage: `url(${props.iconLeft})`,
      backgroundPosition: "top left",
      backgroundRepeat: "no-repeat",
      paddingRight: "1em",
    },
    ":last-child": {
      backgroundImage: `url(${props.iconRight})`,
      backgroundPosition: "top left",
      backgroundRepeat: "no-repeat",
      paddingLeft: "1em",
    },
  },
}));

SplitSection.propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  buttonOne: PropTypes.object,
  buttonTwo: PropTypes.object,
};
