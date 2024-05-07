// react-router-dom
import { NavLink } from "react-router-dom";

// constant
import { menuItem } from "../../../constants/const.js";

// styles
import styles from "./Menu.module.css";

function Menu() {
  return (
    <ul className={styles.ulMenu}>
      {menuItem.map((item, index) => (
        <li key={index}>
          <NavLink to={item.path}>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
