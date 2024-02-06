import React from "react";
import styles from "./Footer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCategory } from "../../redux/reducers/menu-reducer";
import { getMenuCategories } from "../../selectors/selectors";
import { HashLink } from "react-router-hash-link";

const FooterMenu = () => {
  const categories = useSelector(getMenuCategories);
  const dispatch = useDispatch();

  const onCategoryClick = (category: string) => {
    dispatch(setCurrentCategory(category));
  };
  return (
    <div>
      <h3>Menu</h3>
      <ul className={styles.footerMenu}>
        {categories &&
          categories.map((category: string) => (
            <li key={category}>
              <HashLink
                to="/menu#menu"
                onClick={() => onCategoryClick(category)}
              >
                {category}
              </HashLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
