import React from "react";
import { shallow, mount } from "enzyme";
import { render } from "@testing-library/react";
import App from "./App";
import Theme from "./styles/theme";

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders all comp without crashing", () => {
  mount(<App />);
});
