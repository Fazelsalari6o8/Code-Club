// react-router-dom
import { Link } from "react-router-dom";

// Apollo
import { useQuery } from "@apollo/client";

// components
import Title from "../shared/title/Title.jsx";
import Loader from "../shared/loader/Loader.jsx";
import Error from "../shared/error/Error.jsx";
import CmCardEl from "../shared/card/CmCardEl.jsx";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";

// iconsax
import { ArrowLeft, ArrowRight } from "iconsax-react";

// queries
import { GET_ALL_COMMENTS } from "../../graphql/queries.js";

function Comments() {
  const { loading, data, error } = useQuery(GET_ALL_COMMENTS);

  return (
    <div className="max-w-7xl mx-auto mt-32 px-6">
      <Title text="نظرات دانشجویان" />

      <div className="flex items-center justify-between mt-4 select-none">
        <div className="flex items-center">
          <div className="cm-swiper-button-prev">
            <ArrowRight size="24" color="#1a5444" />
          </div>
          <div className="cm-swiper-button-next">
            <ArrowLeft size="24" color="#1a5444" />
          </div>
        </div>
        <Link to="/comments" className="flex items-center text-secondary-700">
          مشاهده بیشتر <ArrowLeft size="18" className="mr-1" />
        </Link>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        data && (
          <Swiper
            className="mt-4"
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
              <SwiperSlide key={comment.id} className="w-[364px] h-[355px]">
                <CmCardEl comment={comment} />
              </SwiperSlide>
            ))}
          </Swiper>
        )
      )}
    </div>
  );
}

export default Comments;
