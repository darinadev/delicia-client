import React from "react";
import styles from "./Home.module.scss";
import { ReactComponent as Food } from "../../assets/svg/food.svg";
import { ReactComponent as Service } from "../../assets/svg/service.svg";
import { ReactComponent as Delivery } from "../../assets/svg/delivery.svg";

export const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <div className={styles.advantage}>
        <Food />
        <h3>Fresh and delicious food</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente,
          quam doloribus illum deserunt alias, sequi.
        </p>
      </div>
      <div className={styles.advantage}>
        <Service />
        <h3>Professional service</h3>
        <p>
          Eligendi molestiae ipsam error commodi architecto suscipit. Officia
          accusamus, aut inventore laboriosam ab quod. Sapiente, quam doloribus
          illum.
        </p>
      </div>
      <div className={styles.advantage}>
        <Delivery />
        <h3>Fast and high-quality delivery</h3>
        <p>
          Quod sint quidem veritatis quaerat ex libero quasi consectetur
          corporis aliquam in at deserunt placeat numquam eum!
        </p>
      </div>
    </div>
  );
};
