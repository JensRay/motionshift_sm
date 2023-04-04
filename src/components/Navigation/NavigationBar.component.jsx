import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import {
  Cta,
  Links,
  Logo,
  NavigationContainer,
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
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <h3>Blog</h3>
        </Tabs>
        <Cta>
          <h3>Log In</h3>
        </Cta>
      </Links>
    </NavigationContainer>
  );
};

export default NavigationBar;
