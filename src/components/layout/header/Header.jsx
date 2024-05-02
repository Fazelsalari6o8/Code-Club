// react-router-dom
import { Link, NavLink } from "react-router-dom";

// mui
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

// styles
import styles from "./Header.module.css";
import { HambergerMenu, Profile, ShoppingCart } from "iconsax-react";

function Header() {
  return (
    // start header
    <AppBar
      position="sticky"
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
          </Box>
          {/* end navbar */}

          {/* start register box */}
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
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <HambergerMenu size="24" color="#35816c" />
            </Typography>

            <Typography
              component="p"
              variant="p"
              mr={3}
              display="flex"
              alignItems="center"
            >
              <Link to="/cart" style={{ display: "flex" }}>
                <ShoppingCart size="24" color="#267f65" />
              </Link>
            </Typography>

            <Typography
              component="p"
              variant="p"
              mr={3}
              sx={{ display: { xs: "none", md: "block" } }}
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
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              <Link to="/dashboard">
                <Profile size="24" color="#ecfbf6" />
              </Link>
            </Typography>
          </Box>
          {/* end register box */}
        </Toolbar>
      </Container>
    </AppBar>
    // end header
  );
}

export default Header;
