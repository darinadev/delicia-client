import React from "react";
import styles from "./OrderingInfo.module.scss";

type PropsType = {
  num: number;
  title: string;
  description: string;
};

export const Step: React.FC<PropsType> = ({ num, title, description }) => {
  return (
    <div className={styles.step}>
      <h3>{num}</h3>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
