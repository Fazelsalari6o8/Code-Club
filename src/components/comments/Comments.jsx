// react-router-dom
import { Link } from "react-router-dom";

// Apollo
import { useQuery } from "@apollo/client";

// components
import Title from "../shared/title/Title.jsx";
import Loader from "../shared/loader/Loader.jsx";
import Error from "../shared/error/Error.jsx";
import CmCardEl from "../shared/card/CmCardEl.jsx";

// mui
import { Container, Box } from "@mui/material";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

// iconsax
import { ArrowLeft, ArrowRight } from "iconsax-react";

// queries
import { GET_ALL_COMMENTS } from "../../graphql/queries.js";

// styles
import styles from "./Comments.module.css";

function Comments() {
  const { loading, data, error } = useQuery(GET_ALL_COMMENTS);

  return (
    <Container maxWidth="lg" sx={{ mt: "124.19px", px: 3 }}>
      <Title text="نظرات دانشجویان" />

      <Box
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt={2}
        sx={{ userSelect: "none" }}
      >
        <Box component="div" display="flex" alignItems="center">
          <div className="cm-swiper-button-prev">
            <ArrowRight size="24" color="#1a5444" />
          </div>
          <div className="cm-swiper-button-next">
            <ArrowLeft size="24" color="#1a5444" />
          </div>
        </Box>
        <Link
          to="/comments"
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
        <Error />
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
              nextEl: ".cm-swiper-button-next",
              prevEl: ".cm-swiper-button-prev",
            }}
            modules={[Navigation, FreeMode]}
          >
            {data.comments.map((comment) => (
              <SwiperSlide key={comment.id} className={styles.card}>
                <CmCardEl comment={comment} />
              </SwiperSlide>
            ))}
          </Swiper>
        )
      )}
    </Container>
  );
}

export default Comments;
