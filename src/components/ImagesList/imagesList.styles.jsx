import styled from "styled-components";

import { colors } from "../../utilities/_variables.styles";

export const MainContainer = styled.div`
  background-color: ${colors.light_blue};
  padding: 16px 0 40px 0;
  min-height: 100vw;
`;

export const SortingContainer = styled.div`
  padding: 0 8%;
  width: 100vw;
  ul {
    display: flex;
    list-style-type: none;
    margin-top: 0;
    padding: 0;
    li {
      margin-right: 24px;
      color: gray;
      cursor: pointer;
      font-size: 1vw;
      &.active-tab {
        color: ${colors.navy_blue};
      }
      @media (max-width: 1366px) {
        font-size: 2vw;
      }
      @media (max-width: 768px) {
        font-size: 4vw;
      }
      @media (max-width: 411px) {
        font-size: 5vw;
      }
      @media (max-width: 375px) {
        font-size: 6vw;
      }
    }
  }
`;

export const ListContainer = styled.div`
  margin: 0 auto;
  width: 84%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 767px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
  }

  & > div {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1.5;
  }
`;
