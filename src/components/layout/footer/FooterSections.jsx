// react-router-dom
import { Link } from "react-router-dom";

// mui
import { Typography } from "@mui/material";

// styles
import styles from "./FooterSections.module.css";

function FooterSections({ sectionTitle, items }) {
  return (
    <>
      <Typography
        component="h4"
        variant="h6"
        fontSize="1.1rem"
        fontWeight={700}
        color="primary.800"
      >
        {sectionTitle}
      </Typography>

      {items && (
        <ul
          className={`${styles.list} ${
            sectionTitle === "شبکه های اجتماعی" && styles.listLast
          }`}
        >
          {items.map((item, index) => (
            <li key={index + new Date().getTime()}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default FooterSections;
