// mui
import { Container, Grid } from "@mui/material";

// components
import Title from "../shared/title/Title.jsx";
import ServicesCard from "./ServicesCard.jsx";
import Ads from "./ads/Ads.jsx";

// const
import { servicesCard } from "../../constants/const.js";

function OurServices() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, px: 3 }}>
      <Title text="خدمات ما" />

      <Grid container mt={3} sx={{ gap: { md: "120px" } }}>
        {servicesCard.map((service, index) => (
          <ServicesCard service={service} index={index} key={index} />
        ))}
      </Grid>

      <Ads />
    </Container>
  );
}

export default OurServices;
