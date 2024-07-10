// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

// constant
import { coursesOfferd } from "../../constants/const.js";

// styles
import "swiper/css";
import "swiper/css/free-mode";

function CoursesOffered() {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-6 select-none">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        freeMode={true}
        modules={[FreeMode]}
      >
        {coursesOfferd.map((item, index) => (
          <SwiperSlide key={index} className="w-fit">
            <div className="border-2 border-primary-500 rounded-2xl py-3 px-6 transition-all duration-300 ease-linear hover:border-primary-800">
              <p className="text-primary-800 font-bold whitespace-nowrap">
                {item.courseTitle}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CoursesOffered;
