import * as React from "react";

export interface StyleContext {
  shades: {
    text: string;
    selectedText: string;
    border: string;
    separation: string;
  };
  colors: {
    background: string;
    highlight: string;
  };
  sizes: {
    font: {
      headline: string;
      subHeadline: string;
      text: string;
    };
  };
  padding: {
    navbar: string;
  };
}

//https://www.schemecolor.com/blue-white-grey-and-black.php

export const defaultStyles: StyleContext = {
  shades: {
    text: "#303030",
    selectedText: "#1C1C1C",
    border: "#808080",
    separation: "##808080",
  },
  colors: {
    background: "#F1F1F1",
    highlight: "#3466AA",
  },
  sizes: {
    font: {
      headline: "40px",
      subHeadline: "24px",
      text: "16px",
    },
  },
  padding: { navbar: "32px 104px" },
};

export const styleContext = React.createContext(defaultStyles);
