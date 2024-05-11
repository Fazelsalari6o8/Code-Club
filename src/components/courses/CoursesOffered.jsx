// mui
import { Box, Container, Typography } from "@mui/material";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

// constant
import { coursesOfferd } from "../../constants/const.js";

// styles
import "swiper/css";
import "swiper/css/free-mode";
import styles from "./CoursesOffered.module.css";

function CoursesOffered() {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: "40px", px: "24px", userSelect: "none" }}
    >
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        freeMode={true}
        modules={[FreeMode]}
      >
        {coursesOfferd.map((item, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <Box component="div" className={styles.courses}>
              <Typography component="p" variant="p">
                {item.courseTitle}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default CoursesOffered;
