import React from "react";
import styles from "./Home.module.scss";
import { NavLink } from "react-router-dom";
import { Advantages } from "./Advantages";
import { OrderingInfo } from "./OrderingInfo/OrderingInfo";
import { Feedback } from "./Feedback";
import { Testimonials } from "./Testimonials/Testimonials";
import homeImg from "../../assets/img/homeBg.jpg";

const Home = () => {
  return (
    <>
      <div className={styles.header}>
        <img src={homeImg} alt="home" />
        <div className={styles.homeInfo}>
          <h1>
            <span>Delicious</span> dishes and drinks, good{" "}
            <span>atmosphere</span> and best service will make your day{" "}
            <span>better</span>
          </h1>
          <NavLink to="/menu" className={styles.homeButton}>
            Our menu
          </NavLink>
        </div>
      </div>
      <Advantages />
      <OrderingInfo />
      <Feedback />
      <Testimonials />
    </>
  );
};

export default Home;
