import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Lato";
  box-sizing: border-box;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

ul {
  list-style-type: none;
}

.active {
  color: ${(props) => props.theme.colors.orange}
}
`;

export default GlobalStyle;
