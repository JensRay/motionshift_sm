import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";

import logo from "../../assets/logo.svg";
import fb_logo from "../../assets/fb_logo.svg";
import FacebookAuthContext from "../../context/FacebookAuthContext";
import FacebookAuth from "../Auth/FacebookAuth.component";
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
  // const [isLogging, setIsLogging] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const { facebookLoggedIn, setFacebookLoggedIn } =
    useContext(FacebookAuthContext);

  const authenticate = () => {
    // setIsLogging(true);
    setFacebookLoggedIn(true);
  };

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
          {facebookLoggedIn ? (
            <FacebookAuth />
          ) : (
            <LastTabLink
              onClick={authenticate}
              to="/"
              style={{ visibility: facebookLoggedIn ? "hidden" : "visible" }}
            >
              <img src={fb_logo} alt="facebook logo" />
              <span>Login with Facebook</span>
              <span>test</span>
            </LastTabLink>
          )}
        </Tabs>
      </Links>
    </NavigationContainer>
  );
};

export default NavigationBar;
