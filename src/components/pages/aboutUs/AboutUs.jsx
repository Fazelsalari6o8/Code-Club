// components
import AboutUsSec from "./aboutUsSection/AboutUsSec.jsx";
import WhoAreWe from "./whoAreWeSection/WhoAreWe.jsx";
import WhyCodeClub from "./whyCodeClub/WhyCodeClub.jsx";

// mui
import { Box, Container } from "@mui/material";

// images
import bottomArrow from "../../../assets/images/aboutUsImages/bottomArrow.png";

function AboutUs() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: { xs: 7, md: "92px", position: "relative" },
      }}
    >
      <Box component="div" display={{ xs: "none", md: "block" }}>
        <img
          src={bottomArrow}
          alt="bottomArrow"
          style={{ position: "absolute", top: "258px", right: "450px" }}
        />
      </Box>

      <AboutUsSec />
      <WhoAreWe />
      <WhyCodeClub />
    </Container>
  );
}

export default AboutUs;
