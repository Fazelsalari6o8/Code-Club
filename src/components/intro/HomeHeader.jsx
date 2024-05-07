// components
import Intro from "./Intro";
import Info from "./Info";

// mui
import { Box, Container } from "@mui/material";

// images
import bgIntro from "../../assets/images/bg-header.jpg";
import bgIntroPhone from "../../assets/images/bg-header-phone.jpg";

// styles
import styles from "./HomeHeader.module.css";

function HomeHeader() {
  return (
    <Box
      component="div"
      sx={{
        position: "relative",
        height: { xs: "735px", sm: "740px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={bgIntro}
        style={{ width: "100%", position: "absolute", top: "0", zIndex: "-1" }}
        className={styles.bgIntro}
      />
      <img
        src={bgIntroPhone}
        style={{ width: "100%", position: "absolute", top: "0", zIndex: "-1" }}
        className={styles.bgIntroPhone}
      />

      <Container
        maxWidth="lg"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", sm: "space-between" },
          zIndex: "100",
        }}
      >
        <Intro />
        <Info />
      </Container>
    </Box>
  );
}

export default HomeHeader;
