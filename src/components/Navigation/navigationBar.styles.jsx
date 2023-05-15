import { Link } from "react-router-dom";
import styled from "styled-components";

import { colors } from "../../utilities/_variables.styles";

export const NavigationContainer = styled.div`
  display: flex;
  height: 80px;
  padding: 0 8%;
  color: ${colors.navy_blue};
  align-items: center;
  border-bottom: 1px solid ${colors.gray_blue};
  font-weight: 500;
`;

export const Logo = styled(Link)`
  width: 150px;
  align-self: center;
  margin-right: 20px;
  margin-top: 6px;
`;

export const MenuButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  color: ${colors.navy_blue};
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 767px) {
    display: block;
    margin-left: auto;
  }
`;

export const Links = styled.div`
  width: 1050px;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 767px) {
    z-index: 1;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: ${colors.navy_blue};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
    &.open {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

export const TabLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  padding: 5px 10px;

  @media (max-width: 767px) {
    color: ${colors.white};
    font-size: 24px;
    margin: 12px 0;
    padding: 0;
  }
`;

export const LastTabLink = styled(Link)`
  background: ${colors.facebook_blue};
  color: white;
  padding: 7px 10px;
  border-radius: 7px;
  margin-left: auto;
  display: flex;
  align-items: center;

  &:visited {
    color: white;
  }
  @media (max-width: 767px) {
    margin: 12px 0;
    font-size: 24px;
    padding: 0;
  }

  img {
    margin-right: 5px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  padding: 4px 12px;
  border-radius: 7px;
  width: 100%;

  @media (max-width: 767px) {
    background-color: ${colors.navy_blue};
    color: white;
    flex-direction: column;
    align-items: center;
    width: 60vw;
  }
`;
