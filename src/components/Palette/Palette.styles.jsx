import styled from "styled-components";

import { colors } from "../../utilities/_variables.styles";

export const PaletteContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 16px;
  padding: 4px;
  background-color: white;
  border: 1px ${colors.gray_blue} solid;
  border-radius: 5px;
  position: relative;
  left: 120px;
`;

export const Color = styled.div`
  height: 6vw;
  width: 6vw;
  cursor: pointer;

  @media (min-width: 411px) {
    height: 8vw;
    width: 8vw;
  }
  @media (min-width: 768px) {
    height: 3vw;
    width: 3vw;
  }
  @media (min-width: 1024px) {
    height: 2vw;
    width: 2vw;
  }
  @media (min-width: 1200px) {
    height: 1.5vw;
    width: 1.5vw;
  }
`;
