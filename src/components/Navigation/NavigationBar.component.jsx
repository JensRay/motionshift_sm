import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import logo from "../../assets/logo.svg";
import {
  LastTabLink,
  Links,
  Logo,
  MenuButton,
  NavigationContainer,
  TabLink,
  Tabs,
} from "./navigationBar.styles";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <NavigationContainer>
      <Logo to="/">
        <img src={logo} alt="motionshift logo" />
      </Logo>
      <MenuButton onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </MenuButton>
      <Links isOpen={isOpen}>
        <Tabs>
          <TabLink onClick={toggleMenu} to="/">
            Home
          </TabLink>
          <TabLink onClick={toggleMenu} to="/">
            Blog
          </TabLink>
          <TabLink onClick={toggleMenu} to="/your_likes">
            Your Likes
          </TabLink>
          <LastTabLink onClick={toggleMenu} to="/">
            Log In
          </LastTabLink>
        </Tabs>
      </Links>
    </NavigationContainer>
  );
};

export default NavigationBar;
