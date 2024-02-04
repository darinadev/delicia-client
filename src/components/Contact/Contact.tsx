import React from "react";
import styles from "./Contact.module.scss";
import { ContactList } from "./ContactList";
import { GetInTouch } from "./GetInTouch";

import contactImg from "../../assets/img/contact.jpg";

const Contact = () => {
  return (
    <>
      <div className={styles.header}>
        <img src={contactImg} alt="about" />
        <div className={styles.title}>
          <h1>
            Our <span>contacts</span>
          </h1>
        </div>
      </div>
      <div className={styles.content}>
        <ContactList />
        <GetInTouch />
      </div>
    </>
  );
};

export default Contact;
