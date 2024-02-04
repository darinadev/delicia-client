import React from "react";
import styles from "./OrderInfo.module.scss";
import { useSelector } from "react-redux";
import { CartProductType } from "../../../types/types";
import { Product } from "./Product";
import { getCartProducts } from "../../../selectors/selectors";

type PropsType = {
  isChangable: boolean;
};

export const Products: React.FC<PropsType> = React.memo(({ isChangable }) => {
  const products = useSelector(getCartProducts);
  return (
    <div className={styles.table}>
      {products.map((product: CartProductType) => (
        <Product key={product.id} product={product} isChangable={isChangable} />
      ))}
    </div>
  );
});
