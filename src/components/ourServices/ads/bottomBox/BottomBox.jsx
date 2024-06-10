// mui
import { Box, Typography } from "@mui/material";

// components
import Button from "../../../shared/button/Button.jsx";

// images
import bottom1 from "../../../../assets/images/servicesImages/ads/bottom1.png";
import bottom2 from "../../../../assets/images/servicesImages/ads/bottom2.png";

// styles
import styles from "./BottomBox.module.css";

function BottomBox() {
  return (
    <Box
      component="div"
      display="flex"
      flexDirection={{ xs: "column-reverse", md: "row" }}
      alignItems="center"
      gap={{ xs: "0", md: "140px" }}
      mt={{ xs: "16px", md: "14px" }}
    >
      <Box
        component="div"
        display="flex"
        flexDirection={{ xs: "row-reverse", md: "row" }}
        gap={4}
        height={{ xs: "313.6px", md: "420px" }}
      >
        <Box
          component="div"
          bgcolor="secondary.500"
          width={{ xs: "180px", md: "250px" }}
          height={{ xs: "273.6px", md: "380px" }}
          borderRadius="200px"
          position="relative"
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

          <img src={bottom2} alt="pic4" className={styles.image2} />
        </Box>

        <Box
          component="div"
          bgcolor="primary.500"
          width={{ xs: "180px", md: "250px" }}
          height={{ xs: "273.6px", md: "380px" }}
          borderRadius="200px"
          position="relative"
          bottom="-40px"
          overflow="hidden"
        >
          <Box
            component="div"
            bgcolor="secondary.500"
            width={{ xs: "144px", md: "200px" }}
            height={{ xs: "144px", md: "200px" }}
            borderRadius="50%"
            position="absolute"
            top={{ xs: "54px", md: "75px" }}
            right={{ xs: "12.24px", md: "17px" }}
          ></Box>

          <img src={bottom1} alt="pic3" className={styles.image1} />
        </Box>
      </Box>

      <Box component="div">
        <Typography
          component="h4"
          variant="h5"
          color="primary.800"
          fontSize={{ xs: "18px", md: "24px" }}
          fontWeight={700}
        >
          یادگیری به‌روز با دوره‌های منحصر به فرد:
          <br />
          کدکلاب، مرجع شما برای توسعه حرفه‌ای!
        </Typography>

        <Typography
          component="p"
          variant="p"
          mt={2}
          color="text.text5"
          fontSize={{ xs: "16px", md: "18px" }}
        >
          با دوره‌های کدکلاب، به‌روزترین و کاربردی‌ترین مهارت‌ها را به دست
          آورید. معتبرترین مدرسان صنعت، همراه با دسترسی به انجمن‌ها و فضای
          مشارکتی، به شما کمک می‌کنند تا به‌روزترین مهارت‌های حرفه‌ای را با
          خیالی آسوده یاد بگیرید.
        </Typography>

        <Button text="اطلاعات بیشتر" link="" mt="16px" />
      </Box>
    </Box>
  );
}

export default BottomBox;
