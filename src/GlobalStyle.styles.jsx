import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    &:visited {
      color: inherit;
    }
  }

  li {
    user-select: none;
  }
`;
