import React from "react";
import { ThemeProvider } from "styled-components";

const themes = {
  colors: {
    orange: "#dd6b2d",
    white: "#fff",
    black: "#121212",
    lightgrey: "#f3f3f4;",
    palegrey: "#FAFAFB",
  },
  fontSize: {
    lg: "2rem",
    md: "1.5rem",
    sm: "1rem",
  },
  images: {},
};

const Theme = ({ children }) => (
  <ThemeProvider theme={themes}>{children}</ThemeProvider>
);

export default Theme;
