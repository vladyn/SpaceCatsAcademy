import React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles";
import logo_Footer_x2 from "../assets/tt_Logo_Footer@2x.png";
import logo_Footer_x15 from "../assets/tt_Logo_Footer@1.5x.png";
import logo_Footer from "../assets/tt_Logo_Footer@1.png";
import logo_LinkedIn from "../assets/iconfinder_logo_likedin.svg";

/**
 * Footer is useless component to make our app look a little closer to a real website!
 */
const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <LogoFooter
          width="132px"
          height="28px"
          src={logo_Footer}
          srcSet={`${logo_Footer_x2} 2x, ${logo_Footer_x15} 1.5x`}
        />
        <div>
          <p>
            The career elevation experts for many happy stories
            <br />
            2021 ©{"All Rights Reserved"}
          </p>
        </div>
      </LogoContainer>
      <div>
        <a href="/privacy">Privacy Policy</a>
        <a href="https://www.linkedin.com/company/technologytalents/">
          <img src={logo_LinkedIn} alt="Follow us on LinkedIn" rel="external" />
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;

/** Footer styled components */
const FooterContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "start",
  color: colors.white,
  fontSize: "0.75em",
  marginTop: 30,
  height: 120,
  padding: 20,
  backgroundImage: "linear-gradient(to bottom, #ABAC6C, #DAC96D)",
  div: {
    display: "flex",
    alignItems: "center",
  },
  p: {
    margin: 0,
  },
  a: {
    color: colors.white,
    ":first-child": {
      marginRight: 12,
    },
  },
});

const LogoContainer = styled.div({
  height: 40,
  marginLeft: 5,
  display: "flex",
});

const LogoFooter = styled.img({
  marginRight: 14,
  paddingRight: 20,
  borderRight: `1px solid ${colors.white}`,
  width: 132,
  height: 22,
});
