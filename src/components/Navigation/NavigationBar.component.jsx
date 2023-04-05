import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import {
  Links,
  Logo,
  NavigationContainer,
  Profile,
  Tabs,
} from "./navigationBar.styles";

const NavigationBar = () => {
  return (
    <NavigationContainer>
      <Logo to="/">
        <img src={logo} alt="motionshift logo" />
      </Logo>
      <Links>
        <Tabs>
          <Link to="/">Home</Link>
          <Link to="/">Blog</Link>
          <Link to="/your_likes">Your Likes</Link>
        </Tabs>
        <Profile>
          <Link to="/">Log In</Link>
        </Profile>
      </Links>
    </NavigationContainer>
  );
};

export default NavigationBar;
