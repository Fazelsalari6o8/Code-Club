// components
import WhyCodeClubCard from "./WhyCodeClubCard.jsx";

// mui
import { Box, Typography } from "@mui/material";

// const
import { whyCodeClubCard as cardContent } from "../../../../constants/const.js";

// images
import topLeftArrow from "../../../../assets/images/aboutUsImages/topLeftArrow.png";
import bottomLeftArrow from "../../../../assets/images/aboutUsImages/bottomLeftArrow.png";

function WhyCodeClub() {
  return (
    <Box component="div" display="flex" justifyContent="center">
      <Box
        component="div"
        position="relative"
        width={{ xs: "360px", md: "100%" }}
      >
        <Typography
          component="h4"
          variant="h5"
          fontSize={{ xs: "20px", md: "24px" }}
          fontWeight={700}
          textAlign="center"
          color="primary.800"
        >
          چرا کدکلاب؟
        </Typography>

        <Box
          component="div"
          display="flex"
          alignItems={{ xs: "center", md: "start" }}
          justifyContent="space-between"
          flexDirection={{ xs: "column", md: "row" }}
          height={{ md: "282.11px" }}
          mt={3}
        >
          {cardContent.map((item) => (
            <WhyCodeClubCard
              title={item.title}
              text={item.text}
              id={item.id}
              key={item.id}
            />
          ))}
        </Box>

        <Box
          component="div"
          width={{ xs: "78.54px", md: "120px" }}
          height={{ xs: "16.59px", md: "25.35px" }}
          position="absolute"
          top={{ xs: "255.4px", md: "60px" }}
          right={{ xs: "300.81px", md: "231.97px" }}
          display={{ xs: "block", md: "none", lg: "block" }}
          sx={{ transform: { xs: "rotate(-110deg)", md: "none" } }}
        >
          <img src={topLeftArrow} alt="top left arrow" />
        </Box>

        <Box
          component="div"
          width={{ xs: "84.15px", md: "120px" }}
          height={{ xs: "17.78px", md: "25.35px" }}
          position="absolute"
          top={{ xs: "534.44px", md: "242px" }}
          right={{ xs: "47.75px", md: "548.93px" }}
          display={{ xs: "block", md: "none", lg: "block" }}
          sx={{ transform: { xs: "rotate(-86.52deg)", md: "none" } }}
        >
          <img src={bottomLeftArrow} alt="bottom left arrow" />
        </Box>

        <Box
          component="div"
          width={{ xs: "81.36px", md: "120px" }}
          height={{ xs: "17.19px", md: "25.35px" }}
          position="absolute"
          top={{ xs: "795px", md: "66px" }}
          right={{ xs: "300.81px", md: "858.97px" }}
          display={{ xs: "block", md: "none", lg: "block" }}
          sx={{ transform: { xs: "rotate(-110deg)", md: "none" } }}
        >
          <img src={topLeftArrow} alt="top left arrow 2" />
        </Box>
      </Box>
    </Box>
  );
}

export default WhyCodeClub;
