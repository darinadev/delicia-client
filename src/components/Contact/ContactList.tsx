import React from "react";
import { ContactItem } from "./ContactItem";
import styles from "./Contact.module.scss";

export const ContactList = () => {
  return (
    <div className={styles.contactList}>
      <h3>Our contacts</h3>
      <ContactItem title="Address">
        <a
          href="https://www.google.com.ua/maps/place/2nd+Ave,+New+York,+NY,+США/@40.7641964,-73.9639248,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258e851ed3373:0x30333f7eb9fc30b8!8m2!3d40.7641964!4d-73.9617361?hl=ru&authuser=0"
          target="_blank"
          rel="noreferrer"
        >
          2 Avenue, New York, 12007, NY, USA
        </a>
      </ContactItem>
      <ContactItem title="Phone">
        <a href="tel:+11123331520">+1(112)333 15 20</a>
      </ContactItem>
      <ContactItem title="Email">
        <a href="mailto:delicia@mail.com">delicia@mail.com</a>
      </ContactItem>
      <ContactItem title="Hours">Mon-Sun, 9 am - 10 pm</ContactItem>
    </div>
  );
};
