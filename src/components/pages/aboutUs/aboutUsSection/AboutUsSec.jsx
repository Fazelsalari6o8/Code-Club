// mui
import { Box, Typography } from "@mui/material";

// images
import aboutUsPic from "../../../../assets/images/aboutUsImages/aboutUs.png";

function AboutUsSec() {
  return (
    <Box
      component="div"
      py={{ xs: "0", md: "24.35px" }}
      mx={{ lg: "72.5px" }} 
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box component="div">
        <Typography
          component="h4"
          variant="h5"
          fontSize={{ xs: "20px", md: "24px" }}
          fontWeight={700}
          color="primary.800"
        >
          درباره ما
        </Typography>

        <Typography
          component="p"
          variant="p"
          fontSize={{ xs: "14px", md: "16px" }}
          color="text.text5"
          mt={2}
          width={{ xs: "382px", sm: "auto", md: "630px" }}
        >
          خوش آمدید به کدکلاب، جایی که توانایی‌ها شما به افق های جدیدی گسترده
          می‌شود. ما در کدکلاب باور داریم که هر فرد، با دسترسی به منابع آموزشی
          مناسب، می‌تواند توانمندی‌های خود را بهبود دهد و در دنیای پرتلاش فناوری
          یک گام جلوتر از دیگران باشد. کدکلاب را انتخاب کنید، یادگیری را تجربه
          کنید و به همراه ما به سوی دنیای نوآوری و فناوری بروید.
        </Typography>
      </Box>

      <Box component="div" my={{ xs: 4, md: 0 }}>
        <img src={aboutUsPic} alt="about us pic" />
      </Box>
    </Box>
  );
}

export default AboutUsSec;
