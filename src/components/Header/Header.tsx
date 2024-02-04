import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartProducts } from "../../selectors/selectors";
import { Nav } from "./Nav";
import logo from "../../assets/img/logo.png";
import { ReactComponent as Cart } from "../../assets/svg/cart.svg";

export const Header = () => {
  const products = useSelector(getCartProducts);
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <NavLink to="./home">
          <img className={styles.logo} src={logo} alt="logo" />
        </NavLink>
        <NavLink to="/cart" className={styles.cartButton}>
          <Cart />
          <p>{products.length}</p>
        </NavLink>
        <Nav />
      </div>
    </div>
  );
};
