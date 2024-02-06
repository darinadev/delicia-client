import React from "react";
import styles from "./Footer.module.scss";
import { FooterInfo } from "./FooterInfo";
import FooterMenu from "./FooterMenu";
import FooterNav from "./FooterNav";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <FooterInfo />
        <FooterNav />
        <FooterMenu />
      </div>
      <p>Copyright © 2024 Delicia. All Rights Reserved</p>
    </div>
  );
};
