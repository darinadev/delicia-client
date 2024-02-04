import React from "react";
import styles from "./Menu.module.scss";
import { useSelector } from "react-redux";
import { MenuProductType } from "../../types/types";
import { Product } from "./Product";
import { getMenuProducts } from "../../selectors/selectors";

export const Section: React.FC = () => {
  const menu = useSelector(getMenuProducts);
  return (
    <div className={styles.section}>
      {menu &&
        menu.map((item: MenuProductType) => (
          <div key={item.id}>
            <Product
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          </div>
        ))}
    </div>
  );
};
