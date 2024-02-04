import React from "react";
import styles from "./ThankYouPage.module.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as Smile } from "../../../assets/svg/smile.svg";

export const ThankYouPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.thankYouPage}>
      <h1>Thanks for choosing us</h1>
      <p>{`We will call you to confirm the ${title}. If you have any questions, call +1(112)333 15 20`}</p>
      <Smile />
      <NavLink to="/home">
        <button>Go to home</button>
      </NavLink>
    </div>
  );
};
