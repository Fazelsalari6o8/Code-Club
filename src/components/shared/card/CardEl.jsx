// react-router-dom
import { Link } from "react-router-dom";

// components
import Button from "../button/Button.jsx";

// iconsax
import { ArrowLeft, Microphone2, People, Timer1 } from "iconsax-react";

// utils
import { e2p, sp } from "../../../utils/replaceNumber.js";

// image
import bgCourseIcon from "../../../assets/images/bg-course-icon.svg";

function CardEl({
  course: { title, price, students, time, courseStatus, slug, image },
}) {
  return (
    <>
      <div className="flex justify-between relative">
        <img
          src={bgCourseIcon}
          alt="bg-icon"
          className="absolute top-[-16px] left-[-16px] rounded-se-2xl"
        />

        <div className="flex flex-col">
          <p className="bg-primary-100 flex items-center w-fit rounded-[20px] mb-3 py-1 px-2">
            <People size="24" color="#40d3a9" style={{ marginLeft: "6px" }} />
            {e2p(students)}
          </p>

          <p className="bg-primary-100 flex items-center w-fit rounded-[20px] mb-3 py-1 px-2">
            <Timer1 size="24" color="#40d3a9" style={{ marginLeft: "6px" }} />
            {e2p(time)} ساعت
          </p>

          {courseStatus ? (
            <p className="bg-primary-100 flex items-center w-fit rounded-[20px] mb-3 py-1 px-2">
              <Microphone2 size="24" color="#40d3a9" className="ml-[6px]" />
              اتمام ضبط
            </p>
          ) : (
            <p className="bg-primary-100 flex items-center w-fit rounded-[20px] mb-3 py-1 px-2">
              <Microphone2 size="24" color="#40d3a9" className="ml-[6px]" />
              درحال ضبط
            </p>
          )}
        </div>

        <div className="z-[1]">
          <img src={image.url} alt={title} />
        </div>
      </div>

      <p className="text-right mt-7 mb-3 text-lg font-bold">
        دوره جامع {title}
      </p>

      <div className="flex justify-between mt-3">
        <Button text="ثبت نام" fontWeight={700} />

        <div className="text-right">
          <p className="text-lg font-bold">{sp(price)} تومان</p>

          <Link
            to={`/courses/${slug}`}
            className="text-secondary-700 text-xs flex items-center"
          >
            مشاهده بیشتر <ArrowLeft size="18" className="mr-1" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardEl;
