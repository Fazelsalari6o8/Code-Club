// mui
import { Box, Typography } from "@mui/material";

// images
import whoAreWe from "../../../../assets/images/aboutUsImages/whoAreWe.png";

function WhoAreWe() {
  return (
    <Box
      component="div"
      py={{ xs: "0", md: "24.35px" }}
      mx={{ lg: "72.5px" }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={{ xs: "column", md: "row-reverse" }}
    >
      <Box component="div">
        <Typography
          component="h4"
          variant="h5"
          fontSize={{ xs: "20px", md: "24px" }}
          fontWeight={700}
          color="primary.800"
        >
          ما کی هستیم؟
        </Typography>

        <Typography
          component="p"
          variant="p"
          fontSize={{ xs: "14px", md: "16px" }}
          color="text.text5"
          mt={2}
          width={{ xs: "382px", sm: "auto", md: "630px" }}
        >
          کدکلاب یک پلتفرم آموزشی است که با تیمی از متخصصان حوزه برنامه‌نویسی و
          فناوری اطلاعات، برنامه‌های آموزشی متنوع و کاربردی ارائه می‌دهد. هدف ما
          از ایجاد این پلتفرم، فراهم کردن فرصتی برای هر کسی است تا به یادگیری
          مهارت‌های جدید بپردازد و راه خود را در دنیای فناوری باز کند.
        </Typography>
      </Box>

      <Box component="div" my={{ xs: 4, md: 0 }}>
        <img src={whoAreWe} alt="about us pic" />
      </Box>
    </Box>
  );
}

export default WhoAreWe;
