// react-router-dom
import { NavLink } from "react-router-dom";

// styles
import styles from "./Menu.module.css";

function Menu() {
  return (
    <ul className={styles.ulMenu}>
      <li>
        <NavLink to="/">خانه</NavLink>
      </li>
      <li>
        <NavLink to="/courses">دوره ها</NavLink>
      </li>
      <li>
        <NavLink to="/news">اخبار</NavLink>
      </li>
      <li>
        <NavLink to="/atricles">مقالات</NavLink>
      </li>
      <li>
        <NavLink to="/comments">نظرات</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">تماس با ما</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">درباره ما</NavLink>
      </li>
    </ul>
  );
}

export default Menu;
