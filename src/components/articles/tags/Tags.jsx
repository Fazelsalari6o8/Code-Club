// styles
import styles from "./Tags.module.css";

function Tags({ item }) {
  return <li className={styles.item}>{item}</li>;
}

export default Tags;
