import logo from "../assets/logo.svg";
import styles from "./navigation_bar.module.scss";

const NavigationBar = () => {
  return (
    <div className={styles.navigation_container}>
      <img src={logo} alt="motionshift logo" />
      <div>Home</div>
      <div>Blog</div>
      <div>Log In</div>
    </div>
  );
};

export default NavigationBar;
