import { createGlobalStyle } from "styled-components";

import { colors } from "./utilities/_variables.styles";

export const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    &:visited {
      color: ${colors.navy_blue};
    }
  }
`;
