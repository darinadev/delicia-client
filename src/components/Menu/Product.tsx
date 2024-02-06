import React from "react";
import styles from "./Menu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/thunks/cart-thunks";
import {
  getAddingInProgress,
  getCartProducts,
} from "../../selectors/selectors";
import { MenuProductType, CartProductType } from "../../types/types";
import { NavLink } from "react-router-dom";
import { AppDispatch } from "../../redux/store";

export const Product: React.FC<MenuProductType> = (props) => {
  const addingInProgress = useSelector(getAddingInProgress);
  const products = useSelector(getCartProducts);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.product}>
      <div className={styles.productHeader}>
        <h3>{props.title}</h3>
        <p>${props.price}</p>
      </div>
      <p className={styles.productDescription}>{props.description}</p>
      {products.some((product: CartProductType) => product.id === props.id) ? (
        <NavLink to="/cart" className={styles.viewCartButton}>
          <button>View cart</button>
        </NavLink>
      ) : (
        <button
          className={styles.addToCartButton}
          disabled={addingInProgress.some((id: number) => id === props.id)}
          onClick={() => {
            dispatch(
              addToCart({
                id: props.id,
                title: props.title,
                price: props.price,
                quantity: 1,
                totalProductPrice: props.price
              })
            );
          }}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};
