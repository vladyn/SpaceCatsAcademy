import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import {
  colors,
  // IconArrowRight,
  // Button,
  // IconDoubleArrowRight,
  // IconRun,
  // IconBook,
} from "../styles";

/**
 * Main navigation.
 * Displays few links with navigation functionality
 */

const MainNavigation = (props) => {
  return (
    <NavWrapper>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/business">Business</Link>
        </li>
        <li>
          <Link to="/candidates">Candidates</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </NavList>
    </NavWrapper>
  );
};

export default MainNavigation;

/** Main navigation styles components */
const NavWrapper = styled.nav({
  flex: 1,
});

const NavList = styled.ul({
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  textTransform: "uppercase",
  fontSize: 11,
  fontWeight: 800,
  a: {
    textDecoration: "none",
    color: colors.mainNavPrimary,
    display: "block",
    padding: "1px 12px 32px 12px",
  },
  "a:hover": {
    color: "#ABAC6C",
  },
  'a[aria-current="page"]': {
    fontWeight: "bold",
    fontFamily: "'Lato bold', sans-serif",
    borderBottom: `2px solid ${colors.mainNavHoverBorderColor}`,
  },
});
