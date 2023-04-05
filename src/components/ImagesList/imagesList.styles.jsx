import styled from "styled-components";

import { colors } from "../../utilities/_variables.styles";

export const MainContainer = styled.div`
  background-color: ${colors.light_blue};
  padding: 16px 0 40px 0;
  min-height: 700px;
`;

export const SortingContainer = styled.div`
  margin: 0 auto;
  width: 1200px;
  ul {
    display: flex;
    list-style-type: none;
    margin-top: 0;
    padding: 0;
    li {
      margin-right: 24px;
      color: gray;
      cursor: pointer;
      &.active-tab {
        color: ${colors.navy_blue};
      }
    }
  }
`;

export const ListContainer = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 500px 500px;
  column-gap: 20px;
  row-gap: 15px;
`;
