import "./utilities/_variables.styles";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    &:visited {
      color: navy_blue;
    }
  }
`;
