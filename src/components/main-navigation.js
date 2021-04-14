import React from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
/** TODO: Remove them OR use them */
import {
  colors,
  IconArrowRight,
  Button,
  IconDoubleArrowRight,
  IconRun,
  IconBook,
} from "../styles";
/** TODO: Remove them OR use them */
import PropTypes from "prop-types";

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

MainNavigation.propTypes = {};

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
});
