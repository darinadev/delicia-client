import React from "react";
import styles from "./OrderInfo.module.scss";
import { useDispatch } from "react-redux";
import cn from "classnames";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../../redux/thunks/cart-thunks";
import { CartProductType } from "../../../types/types";
import { ReactComponent as Minus } from "../../../assets/svg/minus.svg";
import { ReactComponent as Plus } from "../../../assets/svg/plus.svg";
import { ReactComponent as Close } from "../../../assets/svg/close.svg";
import { AppDispatch } from "../../../redux/store";

type PropsType = {
  product: CartProductType;
  isChangable: boolean;
};

export const Product: React.FC<PropsType> = React.memo(
  ({ product, isChangable }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { id, title, price, quantity, totalProductPrice } = product;
    const productQuantity = isChangable ? (
      <div className={styles.quantity}>
        <button
          disabled={totalProductPrice <= price}
          onClick={() => dispatch(decreaseQuantity(id))}
        >
          <Minus />
        </button>
        <p>{quantity}</p>
        <button onClick={() => dispatch(increaseQuantity(id))}>
          <Plus />
        </button>
      </div>
    ) : (
      <p>{quantity}</p>
    );
    return (
      <div
        className={cn(styles.tableItem, { [styles.changable]: isChangable })}
      >
        <h5 className={styles.product}>{title}</h5>
        {productQuantity}
        <div className={styles.price}>${price}</div>
        <div className={styles.subtotal}>${totalProductPrice}</div>
        {isChangable && (
          <Close
            className={styles.removeBtn}
            onClick={() => dispatch(removeFromCart(id))}
          />
        )}
      </div>
    );
  }
);
