// components
import Intro from "./Intro";
import Info from "./Info";

// images
import bgIntro from "../../assets/images/bg-header.jpg";
import bgIntroPhone from "../../assets/images/bg-header-phone.jpg";

function HomeHeader() {
  return (
    <div className="relative h-[735px] flex items-center justify-center sm:h-[740px]">
      <img
        src={bgIntro}
        className={`w-full absolute top-0 h-[740px] hidden sm:block`}
      />
      <img
        src={bgIntroPhone}
        className={`w-full absolute top-0 h-[735px] sm:hidden`}
      />

      <div className="max-w-7xl h-full flex flex-col items-center justify-center px-6 pt-28 z-[100] sm:flex-row sm:justify-between sm:pt-0 sm:w-full">
        <Intro />
        <Info />
      </div>
    </div>
  );
}

export default HomeHeader;
