// react-router-dom
import { Link } from "react-router-dom";

// mui
import { Box, Grid, Typography } from "@mui/material";

// styles
import styles from "./Intro.module.css";

function Intro() {
  return (
    <Box component="div" mt={{ xs: 20, sm: "0" }}>
      <Grid
        container
        xs={12}
        sm={10}
        md={8}
        lg={7}
        sx={{
          backgroundColor: {
            xs: "rgba(255, 255, 255, 0.05)",
            sm: "rgba(255, 255, 255, 0.1)",
          },
          backdropFilter: { xs: "blur(18px)", sm: "blur(30px)" },
          borderRadius: "32px",
          padding: { xs: "32px 12px", lg: "32px 40px" },
          color: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Grid item xs={12}>
          <Typography
            component="h1"
            variant="h1"
            fontSize={{ xs: "24px", sm: "28px" }}
            fontWeight={500}
            lineHeight={1.5}
          >
            مسیری جدید به سمت توانمندی <br /> برنامه نویسی با
            <Typography
              component="span"
              variant="span"
              color="primary.600"
              fontWeight={700}
              mr={{ xs: "15px", lg: "20px" }}
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
          <Typography
            component="p"
            variant="p"
            fontSize="1.1rem"
            className={styles.introDescription}
          >
            شروع یک مهارت جدید با دوره های کدکلاب، مانند باز کردن <br />
            درهایی به جهان پر از فرصت های برنامه نویسی است.
          </Typography>
        </Grid>

        <Grid item xs={12} mt={4}>
          <Box
            component="div"
            sx={{
              display: { xs: "flex" },
              justifyContent: "space-between",
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            <Link to="/courses" className={styles.coursesBtn}>
              مشاهده دوره ها
            </Link>
            <Link to="/about-us" className={styles.moreInfoBtn}>
              اطلاعات بیشتر
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Intro;
