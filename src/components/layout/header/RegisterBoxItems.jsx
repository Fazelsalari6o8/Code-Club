// react-router-dom
import { Link } from "react-router-dom";

// mui
import { Typography } from "@mui/material";

// iconsax
import { Profile } from "iconsax-react";

// styles
import styles from "./RegisterBoxItems.module.css";

function RegisterBoxItems() {
  return (
    <>
      <Typography
        component="p"
        variant="p"
        // ml={3}
        // sx={{ display: { xs: "none", md: "block" } }}
      >
        <Link to="/login" className={styles.login}>
          ورود
        </Link>
      </Typography>

      <Typography
        component="p"
        variant="p"
        bgcolor="primary.500"
        className={styles.profile}
        // sx={{
        //   display: {
        //     xs: "none",
        //     md: "block",
        //   },
        // }}
      >
        <Link to="/dashboard">
          <Profile size="24" color="#ecfbf6" />
        </Link>
      </Typography>
    </>
  );
}

export default RegisterBoxItems;
