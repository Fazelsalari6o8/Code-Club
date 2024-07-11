// components
import AboutUsSec from "./aboutUsSection/AboutUsSec.jsx";
import WhoAreWe from "./whoAreWeSection/WhoAreWe.jsx";
import WhyCodeClub from "./whyCodeClub/WhyCodeClub.jsx";

// images
import bottomArrow from "../../../assets/images/aboutUsImages/bottomArrow.png";

function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-14 relative md:mt-[92px]">
      <div className="hidden md:block">
        <img
          src={bottomArrow}
          alt="bottomArrow"
          className="absolute top-64 right-[450px]"
        />
      </div>

      <AboutUsSec />
      <WhoAreWe />
      <WhyCodeClub />
    </div>
  );
}

export default AboutUs;
