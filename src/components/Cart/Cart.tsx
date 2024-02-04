import React from "react";
import styles from "./Cart.module.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCartProducts } from "../../selectors/selectors";
import { OrderInfo } from "../common/OrderInfo/OrderInfo";

const Cart = () => {
  const products = useSelector(getCartProducts);
  const headers = [
    { id: 0, name: "product" },
    { id: 1, name: "quantity" },
    { id: 2, name: "price" },
    { id: 3, name: "subtotal" },
    { id: 4, name: "remove" },
  ];

  if (!products.length) {
    return (
      <div className={styles.cartEmpty}>
        <div>
          <h1 className={styles.title}>Cart</h1>
          <p>Your cart is currently empty</p>
          <NavLink to="/menu">Go to menu</NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Cart</h1>
      <OrderInfo headers={headers} isChangable={true} />
      <div className={styles.buttons}>
        <NavLink to="/checkout">Proceed to checkout</NavLink>
        <NavLink to="/menu">Continue shopping</NavLink>
      </div>
    </div>
  );
};

export default Cart;
