// components
import Title from "../shared/title/Title.jsx";
import ServicesCard from "./ServicesCard.jsx";
import Ads from "./ads/Ads.jsx";

// const
import { servicesCard } from "../../constants/const.js";

function OurServices() {
  return (
    <div className="max-w-7xl mx-auto mt-16 px-6">
      <Title text="خدمات ما" />

      <div className="grid grid-cols-12 mt-6">
        {servicesCard.map((service, index) => (
          <ServicesCard service={service} index={index} key={index} />
        ))}
      </div>

      <Ads />
    </div>
  );
}

export default OurServices;
