// react-router-dom
import { Link } from "react-router-dom";

// mui
import { Box, Grid, Typography } from "@mui/material";

// iconsax
import { ArrowLeft } from "iconsax-react";

// images
import bgImage from "../../assets/images/servicesImages/servicesVector.svg";
import bgImage1 from "../../assets/images/servicesImages/servicesVector-1.svg";
import bgImage2 from "../../assets/images/servicesImages/servicesVector-2.svg";

// styles
import styles from "./ServicesCard.module.css";

function ServicesCard({ service, index }) {
  return (
    <Grid
      item
      xs={12}
      md={index === 2 ? 12 : 5}
      lg={3}
      height={"236px"}
      display={{ xs: "flex", md: "block" }}
      justifyContent={"center"}
      key={index}
    >
      <Box component="div" display="flex" height="100%">
        <Box component="div" position="relative" height="100%">
          <img
            src={bgImage}
            alt="bgImage"
            style={{ position: "absolute", right: "0", bottom: "0" }}
          />
          <img
            src={service.image}
            alt={service.title}
            style={{
              position: "relative",
              top: `${index === 0 ? "35px" : index === 1 ? "50.7px" : "37px"}`,
              right: `${index === 2 && "25px"}`,
            }}
          />
        </Box>

        <Box
          component="div"
          position="relative"
          mr={index === 1 ? 3 : index === 2 && 5}
        >
          <img src={bgImage1} alt="bgImage1" />
          <img
            src={bgImage2}
            alt="bgImage2"
            style={{ position: "absolute", left: "0", top: "10px" }}
          />
          <Box
            component="div"
            position="absolute"
            left="12px"
            top="75.76px"
            textAlign="center"
          >
            <Typography
              component="p"
              variant="p"
              fontWeight={700}
              color="primary.800"
            >
              {service.title}
            </Typography>
            <Link to={service.link} className={styles.seeMore}>
              مشاهده بیشتر
              <ArrowLeft size="18" style={{ marginRight: "4px" }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default ServicesCard;
