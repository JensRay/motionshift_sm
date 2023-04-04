import styled from "styled-components";

import { colors } from "../../utilities/_variables.styles";

export const MainContainer = styled.div`
  background-color: ${colors.light_blue};
  padding: 40px 0;
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
