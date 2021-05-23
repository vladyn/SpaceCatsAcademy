import React from "react";
import "@apollo/space-kit/reset.css";
import { colors as SKColors } from "@apollo/space-kit/colors";
import { Global } from "@emotion/core";
import { switchcase } from "./utils/helpers";

const breakpoints = [480, 768, 992, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const unit = 8;
export const widths = {
  largePageWidth: 1600,
  regularPageWidth: 1100,
  textPageWitdh: 1100,
};
export const colors = {
  primary: SKColors.indigo.base,
  secondary: SKColors.teal.base,
  accent: SKColors.pink.base,
  background: SKColors.silver.light,
  grey: SKColors.silver.dark,
  text: SKColors.black.base,
  textSecondary: SKColors.grey.dark,
  mainNavPrimary: "#3D3D3D",
  mainNavHoverBorderColor: "#ABAC6C",
  cardTypeOne: "#ABAC6C",
  cardTypeTwo: "#61A48C",
  cardTypeThree: "#CFBE5F",
  cardTypeFour: "#6E8FCA",
  cardHoverBgColor: "#f6f6e0",
  cardHoverBorderColor: "#E1E1B3",
  noColor: "transparent",
  ...SKColors,
};

export const backGrounds = new Map();
backGrounds.set(undefined, 'url("/cover_image_home.webp")');
backGrounds.set("about", 'url("/cover_image_about.webp")');
backGrounds.set("business", 'url("/cover_image_business.webp")');
backGrounds.set("contact", 'url("/cover_image_get_in_touch.webp")');
backGrounds.set("jobs", 'url("/cover_image_jobs.webp")');
backGrounds.set("candidates", 'url("/cover_image_candidates.webp")');

const backgroundSizeCases = {
  undefined: "cover",
  about: "100% 476px",
  business: "100% 476px",
  candidates: "100% 300px",
  jobs: "100% 300px",
  cats: "100% 300px",
  contact: "100% 300px",
};

const positionBkg = (page) => switchcase(backgroundSizeCases)("cover")(page);

const GlobalStyles = ({ page }) => {
  return (
    <Global
      styles={{
        [["html", "body"]]: {
          height: "100%",
        },
        body: {
          margin: 0,
          padding: 0,
          fontFamily: "'Lato', sans-serif",
          backgroundColor: colors.background,
          backgroundImage: 'url("/tt_bkg.svg")',
          backgroundSize: "contain",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          color: colors.text,
        },
        "#root": {
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          backgroundImage: backGrounds.get(page),
          backgroundSize: positionBkg(page),
          backgroundRepeat: "no-repeat",
        },
        "*": {
          boxSizing: "border-box",
        },
        [["h1", "h2", "h3", "h4", "h5", "h6"]]: {
          margin: 0,
          fontWeight: 600,
        },
        h1: {
          fontSize: 40,
          lineHeight: 1,
        },
        h2: {
          fontSize: 36,
        },
        h3: {
          fontSize: 30,
        },
        h5: {
          fontSize: 16,
          textTransform: "uppercase",
          letterSpacing: 4,
        },
      }}
    />
  );
};

export default GlobalStyles;

export { IconRun } from "@apollo/space-kit/icons/IconRun";
export { IconView } from "@apollo/space-kit/icons/IconView";
export { IconTime } from "@apollo/space-kit/icons/IconTime";
export { IconBook } from "@apollo/space-kit/icons/IconBook";
export { IconYoutube } from "@apollo/space-kit/icons/IconYoutube";
export { IconArrowRight } from "@apollo/space-kit/icons/IconArrowRight";
export { IconDoubleArrowRight } from "@apollo/space-kit/icons/IconDoubleArrowRight";
export { ApolloIcon } from "@apollo/space-kit/icons/ApolloIcon";
export { Button } from "@apollo/space-kit/Button";
