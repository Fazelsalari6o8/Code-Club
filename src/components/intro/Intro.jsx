// react-router-dom
import { Link } from "react-router-dom";

// styles
import styles from "./Intro.module.css";

function Intro() {
  return (
    <div className="mt-5 sm:mt-0">
      {/* start grid container */}
      <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[18px] grid grid-cols-12 rounded-[32px] py-8 px-3 text-[rgba(255,255,255,0.8)] sm:grid-cols-10 sm:bg-[rgba(255,255,255,0.1)] sm:backdrop-blur-[30px] md:grid-cols-8 lg:grid-cols-7 lg:py-8 lg:px-10">
        {/* start grid 1 */}
        <div className="col-start-1 col-end-13">
          <h1 className="text-2xl leading-10 font-medium sm:text-[28px]">
            مسیری جدید به سمت توانمندی <br /> برنامه نویسی با
            <span className="text-primary-600 font-bold mr-4 lg:mr-5">
              {"</"}
            </span>
            <span className={`mx-3 font-black ${styles.logoName}`}>کدکلاب</span>
            <span className="text-primary-600 font-bold">{">"}</span>
          </h1>
        </div>
        {/* end grid 1 */}

        {/* start grid 2 */}
        <div className="col-start-1 col-end-13 mt-3">
          <p className="text-lg">
            شروع یک مهارت جدید با دوره های کدکلاب، مانند باز کردن{" "}
            <br className="hidden sm:block" />
            درهایی به جهان پر از فرصت های برنامه نویسی است.
          </p>
        </div>
        {/* end grid 2 */}

        {/* start grid 3 */}
        <div className="col-start-1 col-end-13 mt-8">
          <div className="flex justify-between text-sm sm:text-base">
            <Link to="/courses" className={styles.coursesBtn}>
              مشاهده دوره ها
            </Link>
            <Link to="/about-us" className={styles.moreInfoBtn}>
              اطلاعات بیشتر
            </Link>
          </div>
        </div>
        {/* end grid 3 */}
      </div>
      {/* end grid container */}
    </div>
  );
}

export default Intro;
