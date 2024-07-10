// components
import Button from "../../../shared/button/Button.jsx";

// images
import bottom1 from "../../../../assets/images/servicesImages/ads/bottom1.png";
import bottom2 from "../../../../assets/images/servicesImages/ads/bottom2.png";

function BottomBox() {
  return (
    <div className="flex flex-col-reverse items-center mt-4 md:flex-row md:gap-[140px]">
      <div className="flex flex-row-reverse gap-8 h-[313.6px] md:flex-row md:h-[420px]">
        <div className="bg-secondary-500 w-[180px] h-[273.6px] rounded-[200px] relative overflow-hidden md:w-[250px] md:h-[380px]">
          <div className="bg-primary-500 w-36 h-36 rounded-[50%] absolute top-[78.48px] right-[18px] md:w-[200px] md:h-[200px] md:top-[109px] md:right-6"></div>

          <img
            src={bottom2}
            alt="pic4"
            className="absolute bottom-0 max-md:w-[180px] max-md:h-[191.52px]"
          />
        </div>

        <div className="bg-primary-500 w-[180px] h-[273.6px] rounded-[200px] relative bottom-[-40px] overflow-hidden md:w-[250px] md:h-[380px]">
          <div className="bg-secondary-500 w-36 h-36 rounded-[50%] absolute top-[54px] right-[12.24px] md:w-[200px] md:h-[200px] md:top-[75px] md:right-[17px]"></div>

          <img
            src={bottom1}
            alt="pic3"
            className="absolute bottom-0 right-4 max-md:w-[158.4px] max-md:h-[209.63px] max-md:right-[10.8px]"
          />
        </div>
      </div>

      <div>
        <h4 className="text-primary-800 text-lg font-bold md:text-2xl">
          یادگیری به‌روز با دوره‌های منحصر به فرد:
          <br />
          کدکلاب، مرجع شما برای توسعه حرفه‌ای!
        </h4>

        <p className="mt-4 text-text-text5 md:text-lg">
          با دوره‌های کدکلاب، به‌روزترین و کاربردی‌ترین مهارت‌ها را به دست
          آورید. معتبرترین مدرسان صنعت، همراه با دسترسی به انجمن‌ها و فضای
          مشارکتی، به شما کمک می‌کنند تا به‌روزترین مهارت‌های حرفه‌ای را با
          خیالی آسوده یاد بگیرید.
        </p>

        <Button text="اطلاعات بیشتر" link="" mt="16px" />
      </div>
    </div>
  );
}

export default BottomBox;
