import { useState } from "react";

// react-router-dom
import { Link, NavLink } from "react-router-dom";

// components
import Menu from "./Menu.jsx";
import RegisterBox from "./RegisterBox.jsx";
import DrawerMenu from "./DrawerMenu.jsx";

// mui
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

// iconsax
import { HambergerMenu, Profile, ShoppingCart } from "iconsax-react";

// styles
import styles from "./Header.module.css";

function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    // start header
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "#ffffff00",
        height: { xs: "70px", md: "80px" },
        boxShadow: "none",
        mt: 4,
      }}
    >
      <Container maxWidth="lg" sx={{ px: 3, height: "100%" }}>
        <Toolbar
          sx={{
            bgcolor: "primary.50",
            borderRadius: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "row-reverse", md: "row" },
            height: "100%",
          }}
        >
          {/* start logoname */}
          <Typography
            component="h1"
            variant="h1"
            fontFamily="IRANSans"
            fontSize="1.5rem"
            fontWeight="900"
            className={styles.logoname}
          >
            کد کلاب
          </Typography>
          {/* end logoname */}

          {/* start navbar */}
          <Box
            component="nav"
            height={24}
            sx={{ display: { xs: "none", md: "block" } }}
          >
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
            {/* <Menu /> */}
          </Box>
          {/* end navbar */}

          {/* start register box */}
          <RegisterBox toggleDrawer={toggleDrawer} />
          {/* end register box */}

          {/* start drawer Menu */}
          <DrawerMenu open={open} toggleDrawer={toggleDrawer} />
          {/* end drawer Menu */}
        </Toolbar>
      </Container>
    </AppBar>
    // end header
  );
}

export default Header;
