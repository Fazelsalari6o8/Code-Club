// Apollo
import { useQuery } from "@apollo/client";

// react-router-dom
import { Link } from "react-router-dom";

// mui
import { Box, Container } from "@mui/material";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

// components
import Title from "../shared/title/Title.jsx";
import Loader from "../shared/loader/Loader.jsx";
import Error from "../shared/error/Error.jsx";
import CardEl from "../shared/card/CardEl.jsx";

// iconsax
import { ArrowLeft, ArrowRight } from "iconsax-react";

// queries
import { GET_COURSES_INFO } from "../../graphql/queries.js";

// styles
import styles from "./Courses.module.css";

function Courses() {
  const { loading, data, error } = useQuery(GET_COURSES_INFO);

  return (
    <Container maxWidth="lg" sx={{ mt: 8, px: 3 }}>
      <Title text="دوره ها" />

      <Box
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ userSelect: "none" }}
      >
        <Box component="div" display="flex" alignItems="center">
          <div className="swiper-button-prev">
            <ArrowRight size="24" color="#1a5444" />
          </div>
          <div className="swiper-button-next">
            <ArrowLeft size="24" color="#1a5444" />
          </div>
        </Box>
        <Link
          to="/courses"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            color: "#4ca58c",
          }}
        >
          مشاهده بیشتر <ArrowLeft size="18" style={{ marginRight: "4px" }} />
        </Link>
      </Box>

      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        data && (
          <Swiper
            className={styles.mySwiper}
            slidesPerView="auto"
            spaceBetween={32}
            dir="rtl"
            freeMode="true"
            navigation={{
              clickable: true,
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation, FreeMode]}
          >
            {data.courses.map((course) => (
              <SwiperSlide key={course.id} className={styles.card}>
                <CardEl course={course} />
              </SwiperSlide>
            ))}
          </Swiper>
        )
      )}
    </Container>
  );
}

export default Courses;
