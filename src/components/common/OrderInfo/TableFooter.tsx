import React, { Fragment } from "react";
import styles from "./OrderInfo.module.scss";
import { useSelector } from "react-redux";
import { getShipping, getSubtotalPrice } from "../../../selectors/selectors";

type PropsType = {
  isChangable: boolean;
  isShipping?: boolean;
};

export const TableFooter: React.FC<PropsType> = React.memo(
  ({ isChangable, isShipping }) => {
    const subtotalPrice = useSelector(getSubtotalPrice);
    const shipping = useSelector(getShipping);
    const total =
      !isChangable && isShipping
        ? subtotalPrice + shipping
        : !isChangable && !isShipping
        ? subtotalPrice
        : null;
    return (
      <div className={styles.totalPrice}>
        <h4>Subtotal:</h4>
        <span>${subtotalPrice}</span>
        {!isChangable && (
          <Fragment>
            <h4>Total:</h4>
            <span>${total}</span>
          </Fragment>
        )}
      </div>
    );
  }
);
