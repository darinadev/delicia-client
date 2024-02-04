import React, { FC } from "react";
import styles from "./Cart.module.scss";
import { ErrorMessage, Field } from "formik";
import { useSelector } from "react-redux";
import { getShipping } from "../../selectors/selectors";

type PropsType = {
  setIsShipping: (isShipping: boolean) => void;
};

export const Shipping: FC<PropsType> = React.memo(({ setIsShipping }) => {
  const shipping = useSelector(getShipping);
  return (
    <ul className={styles.shipping} role="group">
      <li>
        <Field
          type="radio"
          id="shipping"
          name="shipping"
          value="Shipping"
          onClick={() => setIsShipping(true)}
        />
        <label htmlFor="shipping">{`Shipping ( $${shipping} )`}</label>
      </li>
      <li>
        <Field
          type="radio"
          id="localPickup"
          name="shipping"
          value="Local pickup"
          onClick={() => setIsShipping(false)}
        />
        <label htmlFor="localPickup">Local pickup</label>
      </li>
      <ErrorMessage
        className={styles.formValidation}
        name="shipping"
        component="div"
      />
    </ul>
  );
});
