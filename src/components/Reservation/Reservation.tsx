import React from "react";
import styles from "./Reservation.module.scss";
import { ReservationForm } from "./ReservationForm";
import reservationImg from "../../assets/img/reservationBg.jpg";

const Reservation: React.FC = () => {
  return (
    <>
      <div className={styles.header}>
        <img src={reservationImg} alt="reservation" />
        <div className={styles.title}>
          <h1>
            Make a <span>reservation</span> online
          </h1>
        </div>
      </div>
      <ReservationForm />
    </>
  );
};

export default Reservation;
