import React from "react";
import styled from "@emotion/styled";
import { widths, colors } from "../styles";
import icon_union from "../assets/Icon_Union.svg";
import icon_check from "../assets/Icon_Check.svg";

/**
 * Two column layout on desktop
 */

const SplitSection = ({ children }) => {
  return <ContentDiv>{children}</ContentDiv>;
};

export default SplitSection;

const ContentDiv = styled.div({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  div: {
    paddingTop: "105px",
    display: "flex",
    flexDirection: "column",
    flexBasis: "100%",
    flex: "1",
    ":last-child": {
      backgroundImage: `url(${icon_check})`,
      backgroundPosition: "top left",
      backgroundRepeat: "no-repeat",
      paddingLeft: "1em",
    },
    ":first-child": {
      backgroundImage: `url(${icon_union})`,
      backgroundPosition: "top left",
      backgroundRepeat: "no-repeat",
      paddingRight: "1em",
    },
  },
});
