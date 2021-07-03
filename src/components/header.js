import React from "react";
import { colors, widths, mq } from "../styles";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import logo from "../assets/tt_Logo.png";
import logo_x2 from "../assets/tt_Logo@2x.png";
import logo_x3 from "../assets/tt_Logo@3x.png";
import MainNavigation from "./main-navigation";

/**
 * Header renders the top navigation
 * for this particular tutorial level, it only holds the home button
 */
const Header = () => {
  return (
    <HeaderBar>
      <Container>
        <HomeButtonContainer>
          <HomeLink to="/">
            <HomeButton>
              <LogoContainer>
                <Logo src={logo} srcSet={`${logo_x2} 2x, ${logo_x3} 3x`} />
                <Title>
                  <h3>Technology Talents</h3>
                  <div>The career elevation experts for many happy stories</div>
                </Title>
              </LogoContainer>
            </HomeButton>
          </HomeLink>
        </HomeButtonContainer>
        <MainNavigation />
      </Container>
    </HeaderBar>
  );
};

export default Header;

const logoDimension = {
  width: 132,
  height: 28,
};

/** Header styled components */
const HeaderBar = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px 30px",
  minHeight: 100,
  backgroundColor: "transparent",
});

const Container = styled.div({
  width: `${widths.regularPageWidth}px`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  [mq[1]]: {
    alignItems: "start",
    flexDirection: "row",
  },
});

const HomeLink = styled(Link)({
  textDecoration: "none",
});

const HomeButtonContainer = styled.div({
  display: "flex",
  [mq[1]]: {
    margin: "18px 0 0 0",
  },
  margin: "18px 0 18px 0",
});

const HomeButton = styled.div({
  display: "flex",
  flexDirection: "row",
  color: colors.accent,
  alignItems: "center",
  ":hover": {
    color: colors.pink.dark,
  },
});

const LogoContainer = styled.div({
  display: "flex",
  alignSelf: "center",
  width: logoDimension.width,
  height: logoDimension.height,
  overflow: "hidden",
});

const Logo = styled.img({
  height: logoDimension.height,
  width: logoDimension.width,
  [mq[1]]: {
    marginRight: 8,
  },
});

const Title = styled.div({
  display: "flex",
  flexDirection: "column",
  h3: {
    lineHeight: "1em",
    marginBottom: 0,
  },
  div: {
    fontSize: "0.9em",
    lineHeight: "0.8em",
    paddingLeft: 2,
  },
});
