// mui
import { Box, Typography } from "@mui/material";

// components
import Button from "../../../shared/button/Button.jsx";

// images
import top1 from "../../../../assets/images/servicesImages/ads/top1.png";
import top2 from "../../../../assets/images/servicesImages/ads/top2.png";

// styles
import styles from "./TopBox.module.css";

function TopBox() {
  return (
    <Box
      component="div"
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      gap={{ xs: "0", md: "140px" }}
    >
      <Box component="div">
        <Typography
          component="h3"
          variant="h5"
          color="primary.800"
          fontSize={{ xs: "18px", md: "24px" }}
          fontWeight={700}
        >
          استادان برجسته، دوره های بی‌نظیر:
          <br />
          یادگیری عمیق از متخصصان حوزه در کدکلاب!
        </Typography>

        <Typography
          component="p"
          variant="p"
          mt={2}
          color="text.text5"
          fontSize={{ xs: "16px", md: "18px" }}
        >
          با استفاده از متخصصین برجسته در حوزه‌های مختلف، کدکلاب به شما فرصتی
          بی‌نظیر برای یادگیری عمیق ارائه می‌دهد. دوره‌های تخصصی و کاربردی با
          آخرین دانش صنعت به شما امکان می‌دهند تا مهارت‌های لازم برای موفقیت در
          حرفه خود را به دست آورید.
        </Typography>

        <Button text="اطلاعات بیشتر" link="" mt="16px" />
      </Box>

      <Box
        component="div"
        display="flex"
        gap={4}
        height={{ xs: "326.8px", md: "420px" }}
      >
        <Box
          component="div"
          bgcolor="secondary.500"
          width={{ xs: "180px", md: "250px" }}
          height={{ xs: "273.6px", md: "380px" }}
          borderRadius="200px"
          position="relative"
          bottom="-40px"
          overflow="hidden"
        >
          <Box
            component="div"
            bgcolor="primary.500"
            width={{ xs: "144px", md: "200px" }}
            height={{ xs: "144px", md: "200px" }}
            borderRadius="50%"
            position="absolute"
            top={{ xs: "78.48px", md: "109px" }}
            right={{ xs: "18px", md: "25px" }}
          ></Box>

          <img src={top1} alt="pic1" className={styles.image1} />
        </Box>

        <Box
          component="div"
          bgcolor="primary.500"
          width={{ xs: "180px", md: "250px" }}
          height={{ xs: "273.6px", md: "380px" }}
          borderRadius="200px"
          position="relative"
          overflow="hidden"
        >
          <Box
            component="div"
            bgcolor="secondary.500"
            width={{ xs: "144px", md: "200px" }}
            height={{ xs: "144px", md: "200px" }}
            borderRadius="50%"
            position="absolute"
            top={{ xs: "61.2px", md: "85px" }}
            left={{ xs: "-26.64px", md: "-37px" }}
          ></Box>

          <img src={top2} alt="pic2" className={styles.image2} />
        </Box>
      </Box>
    </Box>
  );
}

export default TopBox;
