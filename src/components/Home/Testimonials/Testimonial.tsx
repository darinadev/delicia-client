import React from "react";
import styles from "./Testimonials.module.scss";

type PropsType = {
  text: string;
  name: string;
};

export const Testimonial: React.FC<PropsType> = ({ text, name }) => {
  return (
    <div className={styles.testimonial}>
      <p>{text}</p>
      <p className={styles.name}>{name}</p>
    </div>
  );
};
