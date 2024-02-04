import React from "react";
import styles from "./About.module.scss";
import aboutImg from "../../assets/img/aboutBg.jpg";
import { ReactComponent as AboutFood } from "../../assets/svg/icecream.svg";

const About = () => {
  return (
    <>
      <div className={styles.header}>
        <img src={aboutImg} alt="about" />
        <div className={styles.title}>
          <h1>
            <span>Our</span> mission - to be the <span>best!</span>
          </h1>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.icon}>
          <AboutFood />
        </div>
        <p>
          The professional team of our restaurant guarantees the excellent
          quality of the dishes, and also the best service. Our restaurant has
          pleased our visitors for 10 years. Delicious cuisine, friendly staff
          and a cozy atmosphere will make visiting our restaurant as comfortable
          as possible. Visit us or make an order. We will deliver your order in
          time.
        </p>
      </div>
    </>
  );
};

export default About;
