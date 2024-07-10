// components
import Button from "../../../shared/button/Button.jsx";

// images
import top1 from "../../../../assets/images/servicesImages/ads/top1.png";
import top2 from "../../../../assets/images/servicesImages/ads/top2.png";

function TopBox() {
  return (
    <div className="flex flex-col items-center md:flex-row md:gap-[140px]">
      <div>
        <h4 className="text-primary-800 text-lg font-bold md:text-2xl">
          استادان برجسته، دوره های بی‌نظیر:
          <br />
          یادگیری عمیق از متخصصان حوزه در کدکلاب!
        </h4>

        <p className="mt-4 text-text-text5 md:text-lg">
          با استفاده از متخصصین برجسته در حوزه‌های مختلف، کدکلاب به شما فرصتی
          بی‌نظیر برای یادگیری عمیق ارائه می‌دهد. دوره‌های تخصصی و کاربردی با
          آخرین دانش صنعت به شما امکان می‌دهند تا مهارت‌های لازم برای موفقیت در
          حرفه خود را به دست آورید.
        </p>

        <Button text="اطلاعات بیشتر" link="" mt="16px" />
      </div>

      <div className="flex gap-8 h-[326.8px] md:h-[420px]">
        <div className="bg-secondary-500 w-[180px] h-[273.6px] rounded-[200px] relative bottom-[-40px] overflow-hidden md:w-[250px] md:h-[380px]">
          <div className="bg-primary-500 w-36 h-36 rounded-[50%] absolute top-[78.48px] right-[18px] md:w-[200px] md:h-[200px] md:top-[109px] md:right-[25px]"></div>

          <img
            src={top1}
            alt="pic1"
            className="absolute bottom-0 right-12 max-md:w-[110.16px] max-md:h-[203.04px] max-md:right-[35.28px]"
          />
        </div>

        <div className="bg-primary-500 w-[180px] h-[273.6px] rounded-[200px] relative overflow-hidden md:w-[250px] md:h-[380px]">
          <div className="bg-secondary-500 w-36 h-36 rounded-[50%] absolute top-[61.2px] left-[-26.64px] md:w-[200px] md:h-[200px] md:top-[85px] md:left-[-37px]"></div>

          <img
            src={top2}
            alt="pic2"
            className="absolute bottom-0 max-md:w-[180px] max-md:h-[187.5px]"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBox;
