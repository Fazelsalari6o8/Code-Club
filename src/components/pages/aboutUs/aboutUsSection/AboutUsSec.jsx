// images
import aboutUsPic from "../../../../assets/images/aboutUsImages/aboutUs.png";

function AboutUsSec() {
  return (
    <div className="flex flex-col items-center justify-between md:flex-row md:py-6 lg:mx-[72.5px]">
      <div>
        <h4 className="text-primary-800 text-xl font-bold md:text-2xl">
          درباره ما
        </h4>

        <p className="text-text-text5 w-96 mt-4 text-sm sm:w-auto md:w-[630px] md:text-base">
          خوش آمدید به کدکلاب، جایی که توانایی‌ها شما به افق های جدیدی گسترده
          می‌شود. ما در کدکلاب باور داریم که هر فرد، با دسترسی به منابع آموزشی
          مناسب، می‌تواند توانمندی‌های خود را بهبود دهد و در دنیای پرتلاش فناوری
          یک گام جلوتر از دیگران باشد. کدکلاب را انتخاب کنید، یادگیری را تجربه
          کنید و به همراه ما به سوی دنیای نوآوری و فناوری بروید.
        </p>
      </div>

      <div className="my-8 md:my-0">
        <img src={aboutUsPic} alt="about us pic" />
      </div>
    </div>
  );
}

export default AboutUsSec;
