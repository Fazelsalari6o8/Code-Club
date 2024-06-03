// react-router-dom
import { Link } from "react-router-dom";

// styles
import styles from "./Button.module.css";

function Button({ text, link, mt, fontWeight }) {
  return (
    <Link
      to={`/${link}`}
      className={styles.button}
      style={{ marginTop: mt && mt, fontWeight: fontWeight && fontWeight }}
    >
      {text}
    </Link>
  );
}

export default Button;
