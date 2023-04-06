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
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
