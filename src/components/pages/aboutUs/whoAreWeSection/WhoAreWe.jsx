// images
import whoAreWe from "../../../../assets/images/aboutUsImages/whoAreWe.png";

function WhoAreWe() {
  return (
    <div className="flex flex-col items-center justify-between md:flex-row-reverse md:py-6 lg:mx-[72.5px]">
      <div>
        <h4 className="text-primary-800 text-xl font-bold md:text-2xl">
          ما کی هستیم؟
        </h4>

        <p className="text-text-text5 w-96 mt-4 text-sm sm:w-auto md:w-[630px] md:text-base">
          کدکلاب یک پلتفرم آموزشی است که با تیمی از متخصصان حوزه برنامه‌نویسی و
          فناوری اطلاعات، برنامه‌های آموزشی متنوع و کاربردی ارائه می‌دهد. هدف ما
          از ایجاد این پلتفرم، فراهم کردن فرصتی برای هر کسی است تا به یادگیری
          مهارت‌های جدید بپردازد و راه خود را در دنیای فناوری باز کند.
        </p>
      </div>

      <div className="my-8 md:my-0">
        <img src={whoAreWe} alt="about us pic" />
      </div>
    </div>
  );
}

export default WhoAreWe;
