import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import styles from "./navigationBar.module.scss";

const NavigationBar = () => {
  return (
    <div className={styles.navigation_container}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="motionshift logo" />
      </Link>
      <div className={styles.links}>
        <div className={styles.tabs}>
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <h3>Blog</h3>
        </div>
        <div className={styles.cta}>
          <h3>Log In</h3>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
