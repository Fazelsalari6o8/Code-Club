// react-router-dom
import { Link } from "react-router-dom";

// mui
import { Box, Container, Grid, Typography } from "@mui/material";

// images
import bgIntro from "../../assets/images/bg-header.jpg";
import bgIntroPhone from "../../assets/images/bg-header-phone.jpg";

// styles
import styles from "./Intro.module.css";

function Intro() {
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
          gap: { sm: "50px" },
          zIndex: "100",
        }}
      >
        <Box component="div" width="100%">
          <Grid
            container
            xs={12}
            sm={8}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(30px)",
              borderRadius: "32px",
              padding: "32px 40px",
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <Grid item xs={12}>
              <Typography
                component="h1"
                variant="h1"
                fontSize={{ xs: "24px", sm: "28px" }}
              >
                مسیری جدید به سمت توانمندی <br /> برنامه نویسی با
                <Typography
                  component="span"
                  variant="span"
                  color="primary.600"
                  fontWeight={700}
                  mr={{ xs: "15px", lg: "50px" }}
                >
                  {"</"}
                </Typography>
                <Typography
                  component="span"
                  variant="span"
                  mx="10px"
                  fontWeight={900}
                  className={styles.logoName}
                >
                  کدکلاب
                </Typography>
                <Typography
                  component="span"
                  variant="span"
                  color="primary.600"
                  fontWeight={700}
                >
                  {">"}
                </Typography>
              </Typography>
            </Grid>

            <Grid item xs={12} mt="12px">
              <Typography component="p" variant="p" fontSize="1.1rem">
                شروع یک مهارت جدید با دوره های کدکلاب، مانند باز کردن درهایی به
                جهان پر از فرصت های برنامه نویسی است.
              </Typography>
            </Grid>

            <Grid item xs={12} mt={4}>
              <Link to="/courses" className={styles.coursesBtn}>
                مشاهده دوره ها
              </Link>
              <Link to="/about-us" className={styles.moreInfoBtn}>
                اطلاعات بیشتر
              </Link>
            </Grid>
          </Grid>
        </Box>

        <Box component="div">
          <Grid
            container
            xs={12}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(30px)",
              borderRadius: "16px",
              padding: "32px",
              marginTop: { xs: "10px", sm: "0" },
            }}
          >
            <Grid item xs={6} sm={12}>
              <Typography component="p" variant="p" color="primary.200">
                ۲۲۰
              </Typography>
              <Typography component="p" variant="p" color="primary.400">
                مدرس
              </Typography>
            </Grid>
            <Grid item xs={6} sm={12}>
              <Typography component="p" variant="p" color="primary.200">
                ۱۲,۵۲۴
              </Typography>
              <Typography component="p" variant="p" color="primary.400">
                دانشجو
              </Typography>
            </Grid>
            <Grid item xs={6} sm={12}>
              <Typography component="p" variant="p" color="primary.200">
                ۳۶۰,۰۰۰
              </Typography>
              <Typography component="p" variant="p" color="primary.400">
                ساعت آموزش
              </Typography>
            </Grid>
            <Grid item xs={6} sm={12}>
              <Typography component="p" variant="p" color="primary.200">
                ۳۶۰,۰۰۰
              </Typography>
              <Typography component="p" variant="p" color="primary.400">
                دوره آموزشی
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Intro;
