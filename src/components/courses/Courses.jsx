// Apollo
import { useQuery } from "@apollo/client";

// react-router-dom
import { Link } from "react-router-dom";

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

function Courses() {
  const { loading, data, error } = useQuery(GET_COURSES_INFO);

  return (
    <div className="max-w-7xl mx-auto mt-16 px-6">
      <Title text="دوره ها" />

      <div className="flex items-center justify-between select-none">
        <div className="flex items-center">
          <div className="swiper-button-prev">
            <ArrowRight size="24" color="#1a5444" />
          </div>
          <div className="swiper-button-next">
            <ArrowLeft size="24" color="#1a5444" />
          </div>
        </div>

        <Link to="/courses" className="flex items-center text-secondary-700">
          مشاهده بیشتر <ArrowLeft size="18" className="mr-1" />
        </Link>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        data && (
          <Swiper
            className="text-primary-800 mt-4"
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
              <SwiperSlide
                key={course.id}
                className="bg-secondary-50 w-80 border border-primary-150 rounded-2xl p-4"
              >
                <CardEl course={course} />
              </SwiperSlide>
            ))}
          </Swiper>
        )
      )}
    </div>
  );
}

export default Courses;
