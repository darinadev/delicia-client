import React from "react";
import styles from "./Menu.module.scss";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "./Section";
import { setCurrentCategory } from "../../redux/actions/menu-actions";
import {
  getCurrentCategory,
  getMenuCategories,
} from "../../selectors/selectors";
import menuImg from "../../assets/img/menuBg.jpg";

const Menu = () => {
  const categories = useSelector(getMenuCategories);
  const currentCategory = useSelector(getCurrentCategory);

  const dispatch = useDispatch();

  const onCategoryClick = (category: string) => {
    dispatch(setCurrentCategory(category));
  };
  return (
    <>
      <div className={styles.header}>
        <img src={menuImg} alt="menu" />
        <div className={styles.title}>
          <h1>
            Our <span>menu</span>
          </h1>
        </div>
      </div>
      <div id="menu" className={styles.menu}>
        <div className={styles.menuTabs}>
          {categories &&
            categories.map((category: string) => (
              <button
                key={category}
                className={cn(styles.menuTab, {
                  [styles.active]: currentCategory === category,
                })}
                onClick={() => onCategoryClick(category)}
              >
                {category}
              </button>
            ))}
        </div>
        <Section />
      </div>
    </>
  );
};

export default Menu;
