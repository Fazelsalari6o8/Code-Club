// react-router-dom
import { Link } from "react-router-dom";

// iconsax
import { ArrowLeft } from "iconsax-react";

// images
import bgImage from "../../assets/images/servicesImages/servicesVector.svg";
import bgImage1 from "../../assets/images/servicesImages/servicesVector-1.svg";
import bgImage2 from "../../assets/images/servicesImages/servicesVector-2.svg";

function ServicesCard({ service, index }) {
  return (
    <div
      className={`col-start-1 col-end-13 h-[236px] flex justify-center md:block ${
        index === 0
          ? "md:col-start-1 md:col-end-5 lg:col-start-1 lg:col-end-5"
          : index === 1
          ? "md:col-start-8 md:col-end-13 lg:col-start-5 lg:col-end-9"
          : index === 2 &&
            "md:col-start-1 md:col-end-5 md:mt-8 lg:col-start-9 lg:col-end-13 lg:mt-0"
      }`}
    >
      <div className="flex h-full">
        <div className="relative h-full">
          <img
            src={bgImage}
            alt="bgImage"
            className="absolute right-0 bottom-0"
          />
          <img
            src={service.image}
            alt={service.title}
            className={`relative ${
              index === 0
                ? "top-9"
                : index === 1
                ? "top-[50.7px]"
                : "top-9 right-6"
            }`}
          />
        </div>

        <div
          className={`relative ${
            index === 1 ? "mr-6" : index === 2 && "mr-10"
          }`}
        >
          <img src={bgImage1} alt="bgImage1" />
          <img
            src={bgImage2}
            alt="bgImage2"
            className="absolute left-0 top-2"
          />
          <div className="absolute left-3 top-[75.76px] text-center">
            <p className="text-primary-800 font-bold">{service.title}</p>
            <Link
              to={service.link}
              className="flex items-center justify-center text-xs text-secondary-700 mt-2 transition-colors duration-200 ease-linear hover:text-secondary-850"
            >
              مشاهده بیشتر
              <ArrowLeft size="18" className="mr-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
