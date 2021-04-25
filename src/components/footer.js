import React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles";
import logo_Footer_x2 from "../assets/tt_Logo_Footer@2x.png";
import logo_Footer_x15 from "../assets/tt_Logo_Footer@1.5x.png";
import logo_Footer from "../assets/tt_Logo_Footer@1.png";

/**
 * Footer is useless component to make our app look a little closer to a real website!
 */
const Footer = ({ children }) => {
  return (
    <FooterContainer>
      2021 ©{" "}
      <LogoContainer>
        <LogoFooter
          width="132px"
          height="28px"
          src={logo_Footer}
          srcSet={`${logo_Footer_x2} 2x, ${logo_Footer_x15} 1.5x`}
        />
      </LogoContainer>
    </FooterContainer>
  );
};

export default Footer;

/** Footer styled components */
const FooterContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  color: colors.pink.base,
  marginTop: 30,
  height: 120,
  padding: 20,
  backgroundImage: "linear-gradient(to bottom, #ABAC6C, #DAC96D)",
});

const LogoContainer = styled.div({
  height: 40,
  marginLeft: 5,
  svg: {
    height: 40,
  },
});

const LogoFooter = styled.img({});
