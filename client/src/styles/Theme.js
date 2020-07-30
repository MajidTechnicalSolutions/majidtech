import React from "react";
import { ThemeProvider } from "styled-components";

const themes = {
  colors: {
    orange: "#dd6b2d",
    white: "#fff",
    black: "#121212",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={themes}>{children}</ThemeProvider>
);

export default Theme;
