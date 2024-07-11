// components
import WhyCodeClubCard from "./WhyCodeClubCard.jsx";

// const
import { whyCodeClubCard as cardContent } from "../../../../constants/const.js";

// images
import topLeftArrow from "../../../../assets/images/aboutUsImages/topLeftArrow.png";
import bottomLeftArrow from "../../../../assets/images/aboutUsImages/bottomLeftArrow.png";

function WhyCodeClub() {
  return (
    <div className="flex justify-center">
      <div className="relative w-[360px] md:w-full">
        <h4 className="text-primary-800 text-center text-xl font-bold md:text-2xl">
          چرا کدکلاب؟
        </h4>

        {/* start cards */}
        <div className="flex flex-col items-center justify-between mt-6 md:flex-row md:items-start md:h-[282.11px]">
          {cardContent.map((item) => (
            <WhyCodeClubCard
              title={item.title}
              text={item.text}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
        {/* end cards */}

        {/* start arrow */}
        <div className="block w-[78.54px] h-[16.59px] absolute top-64 right-[300.81px] rotate-[-110deg] md:hidden md:w-[120px] md:h-[25.35px] md:top-[60px] md:right-[231.97px] md:rotate-0 lg:block">
          <img src={topLeftArrow} alt="top left arrow" />
        </div>

        <div className="block w-[84.15px] h-[17.78px] absolute top-[534.44px] right-12 rotate-[-86.52deg] md:hidden md:w-[120px] md:h-[25.35px] md:top-[242px] md:right-[548.93px] md:rotate-0 lg:block">
          <img src={bottomLeftArrow} alt="bottom left arrow" />
        </div>

        <div className="block w-[81.36px] h-[17.19px] absolute top-[795px] right-[300.81px] rotate-[-110deg] md:hidden md:w-[120px] md:h-[25.35px] md:top-[66px] md:right-[858.97px] md:rotate-0 lg:block">
          <img src={topLeftArrow} alt="top left arrow 2" />
        </div>
        {/* end arrow */}
      </div>
    </div>
  );
}

export default WhyCodeClub;
