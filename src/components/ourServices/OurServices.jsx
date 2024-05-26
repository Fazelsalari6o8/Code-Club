// mui
import { Container, Grid, Typography } from "@mui/material";

// components
import ServicesCard from "./ServicesCard.jsx";

// const
import { servicesCard } from "../../constants/const.js";

function OurServices() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, px: 3 }}>
      <Typography
        component="h3"
        variant="h3"
        fontSize={{ xs: "20px", lg: "24px" }}
        fontWeight={700}
        color="primary.800"
        width="100%"
        textAlign="center"
      >
        خدمات ما
      </Typography>

      <Grid container mt={3} sx={{ gap: { md: "120px" } }}>
        {servicesCard.map((service, index) => (
          <ServicesCard service={service} index={index} key={index} />
        ))}
      </Grid>
    </Container>
  );
}

export default OurServices;
