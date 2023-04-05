import { Link } from "react-router-dom";
import styled from "styled-components";

import { colors } from "../../utilities/_variables.styles";

export const NavigationContainer = styled.div`
  display: flex;
  height: 80px;
  padding: 0 120px;
  color: ${colors.navy_blue};
  align-items: center;
  border-bottom: 1px solid ${colors.gray_blue};
  font-weight: 500;
`;

export const Logo = styled(Link)`
  width: 150px;
  align-self: center;
  margin-right: 20px;
`;

export const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 300px;
`;

export const Profile = styled.div`
  align-self: center;
  background-color: ${colors.navy_blue};
  color: white;
  padding: 4px 12px;
  border-radius: 7px;

  h3 {
    /* margin: 0; */
  }
`;
