import React from "react";
import { ThemeProvider } from "styled-components";
import { mount, shallow } from "enzyme";

export const themes = {
  colors: {
    orange: "#dd6b2d",
    white: "#fff",
    black: "#121212",
    lightgrey: "#f3f3f4;",
    palegrey: "#FAFAFB",
    dimgrey: "#696969",
  },
  fontSize: {
    lg: "2rem",
    md: "1.5rem",
    sm: "1rem",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={themes}>{children}</ThemeProvider>
);

export const shallowTheme = (tree) =>
  shallow(tree, {
    wrappingComponent: Theme,
  });

export const mountTheme = (tree) =>
  mount(tree, {
    wrappingComponent: Theme,
  });

export default Theme;
