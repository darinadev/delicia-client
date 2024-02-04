import React from "react";
import styles from "./OrderingInfo.module.scss";
import { Step } from "./Step";
import { NavLink } from "react-router-dom";
import OrderingInfoImg from "../../../assets/img/pizza.jpg";

export const OrderingInfo = () => {
  return (
    <div className={styles.orderingInfo}>
      <div>
        <h2>How to order</h2>
        <Step
          num={1}
          title="Select Your Food"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <Step
          num={2}
          title="Pay With Card or Cash"
          description="Hic nulla placeat officiis perferendis aliquam unde dolorem aperiam quas."
        />
        <Step
          num={3}
          title="Pickup or Delivery"
          description="Aut culpa soluta consequatur officiis enim, fugiat quas."
        />
        <div className={styles.buttons}>
          <NavLink to="/menu">Go to menu</NavLink>
          <NavLink to="/cart">Go to cart</NavLink>
        </div>
      </div>
      <img src={OrderingInfoImg} alt="Ordering info" />
    </div>
  );
};
