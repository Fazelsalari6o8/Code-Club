// react-router-dom
import { Link } from "react-router-dom";

// components
import RegisterBoxItems from "./RegisterBoxItems";

// mui
import { Box, Typography } from "@mui/material";

// iconsax
import { HambergerMenu, ShoppingCart } from "iconsax-react";

function RegisterBox({ toggleDrawer }) {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "48px",
      }}
    >
      <Typography
        component="p"
        variant="p"
        ml={3}
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={toggleDrawer(true)}
        dir="rtl"
      >
        <HambergerMenu size="24" color="#35816c" />
      </Typography>

      <Typography
        component="p"
        variant="p"
        ml={3}
        display="flex"
        alignItems="center"
      >
        <Link to="/cart" style={{ display: "flex" }}>
          <ShoppingCart size="24" color="#267f65" />
        </Link>
      </Typography>
      <Box
        component="div"
        sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
      >
        <RegisterBoxItems />
      </Box>
    </Box>
  );
}

export default RegisterBox;
