import React from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/svg/twitter.svg";
import { ReactComponent as YouTube } from "../../assets/svg/youtube.svg";
import logo from "../../assets/img/logo.png";

export const FooterInfo = () => {
  return (
    <div>
      <img src={logo} alt="logo" className={styles.logo} />
      <h3>Follow us:</h3>
      <div className={styles.socials}>
        <a
          className={styles.facebook}
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook />
        </a>
        <a
          className={styles.instagram}
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <a
          className={styles.twitter}
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
        <a
          className={styles.youtube}
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
        >
          <YouTube />
        </a>
      </div>
    </div>
  );
};
