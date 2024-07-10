import { useRef, useState } from "react";

// react-router-dom
import { NavLink } from "react-router-dom";

// components
import RegisterBox from "./RegisterBox.jsx";
import DrawerMenu from "./DrawerMenu.jsx";

// mui
import { AppBar, Container } from "@mui/material";

// constants
import { changeCss, menuItem } from "../../../constants/const.js";

// styles
import styles from "./Header.module.css";

function Header() {
  const [open, setOpen] = useState(false);
  const headerTag = useRef(null);

  window.addEventListener("scroll", () => changeCss(headerTag.current));

  return (
    <>
      {/* start header */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#ffffff00",
          height: { xs: "70px", md: "80px" },
          boxShadow: "none",
          mt: { xs: 4, sm: "42px" },
          transition: "all 0.1s linear",
        }}
        ref={headerTag}
      >
        <Container maxWidth="lg" sx={{ px: 3, height: "100%" }}>
          <div className="bg-primary-50 h-full px-[22px] rounded-[32px] flex items-center justify-between flex-row-reverse md:flex-row">
            {/* start logoname */}
            <h1 className={`font-sans text-2xl font-black ${styles.logoname}`}>
              کد کلاب
            </h1>
            {/* end logoname */}

            {/* start navbar */}
            <nav className="h-6 hidden md:block">
              <ul className="list-none flex items-center">
                {menuItem.map((item, index) => (
                  <li
                    key={index}
                    className="ml-6 rounded-lg relative after:content after:w-0 after:h-[30px] after:inline-block after:bg-primary-500 after:rounded-[50%] after:absolute after:left-1/2 cursor-pointer after:transition-all after:duration-100 hover:after:w-[30px] hover:after:drop-shadow-[-5px 2px 4px bg-primary-500] hover:after:blur-xl"
                  >
                    <NavLink
                      to={item.path}
                      className="no-underline text-dark-500 p-[5px]"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            {/* end navbar */}

            {/* start register box */}
            <RegisterBox setOpen={setOpen} />
            {/* end register box */}

            {/* start drawer Menu */}
            <DrawerMenu open={open} setOpen={setOpen} />
            {/* end drawer Menu */}
          </div>
        </Container>
      </AppBar>
      {/* end header */}
    </>
  );
}

export default Header;
