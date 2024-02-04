import React from "react";
import styles from "./Contact.module.scss";

type PropsType = {
  title: string | undefined;
  children: any;
};

export const ContactItem: React.FC<PropsType> = ({ title, children }) => {
  return (
    <div className={styles.contactItem}>
      <h4>{title}</h4>
      <p>{children}</p>
    </div>
  );
};
