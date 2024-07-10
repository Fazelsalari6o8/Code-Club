// components
import FooterSections from "./FooterSections";

// iconsax
import { Heart } from "iconsax-react";

// styles
import styles from "./Footer.module.css";

function Footer() {
  return (
    // start footer
    <footer className="w-full h-fit bg-footerXs bg-no-repeat bg-cover md:bg-footerMd">
      {/* start container */}
      <div className="container max-w-7xl mx-auto mt-[60px] pt-[100px] px-6 pb-8 md:pt-32 md:px-8">
        {/* start grid cols */}
        <div className="grid grid-cols-12">
          {/* start newsletter section */}
          <div className="col-start-1 col-end-13 mb-8 md:col-end-7 lg:col-end-6">
            <FooterSections sectionTitle="عضویت در خبرنامه" />
            <p className="font-sans text-base mt-1">
              با عضویت در خبرنامه، از تخفیف ها، جشنواره ها و آخرین دوره ها زودتر
              از همه باخبر شوید.
            </p>
            <div>
              <input
                type="email"
                placeholder="ایمیل"
                className="w-full h-12 border border-solid border-[#cbd5e1] rounded-lg my-3 mx-0 py-2 px-3 text-base text-[#94a3b8] focus:outline-none sm:w-[276px]"
              />
              <button
                className={`py-3 px-12 border-none rounded-2xl text-base font-semibold text-primary-800 sm:mr-3 ${styles.buttonEmail}`}
              >
                ارسال
              </button>
            </div>
          </div>
          {/* end newsletter section */}

          {/* start sections */}
          <div className="col-start-1 col-end-7 sm:col-end-4 md:col-start-7 md:col-end-9 lg:col-start-7 lg:col-end-9">
            <FooterSections
              sectionTitle="بخش های سایت"
              items={[
                { name: "دوره ها", link: "/courses" },
                { name: "درباره ما", link: "/about-us" },
                { name: "نظرات", link: "/comments" },
                { name: "بلاگ", link: "/articles" },
              ]}
            />
          </div>

          <div className="col-start-8 col-end-13 sm:col-start-6 sm:col-end-9 md:col-start-9 md:col-end-11 lg:col-start-9 lg:col-end-11">
            <FooterSections
              sectionTitle="دوره های آموزشی"
              items={[
                { name: "دوره جامع انگولار", link: "/courses/angular" },
                { name: "دوره جامع ری‌اکت", link: "/courses/reactjs" },
                { name: "دوره جامع پایتون", link: "/courses/python" },
                { name: "دوره جامع فلاتر", link: "/courses/flutter" },
              ]}
            />
          </div>

          <div className="col-start-1 col-end-13 mt-6 sm:col-start-10 sm:mt-0 md:col-start-11 lg:col-start-11">
            <FooterSections
              sectionTitle="شبکه های اجتماعی"
              items={[
                { name: "اینستاگرام", link: "#" },
                { name: "تلگرام", link: "#" },
                { name: "لینکدین", link: "#" },
                { name: "یوتیوب", link: "#" },
              ]}
            />
          </div>
          {/* end sections */}

          {/* start copyright */}
          <div className="col-start-1 col-end-13 h-6 mt-8">
            <p className="text-[0.95rem] flex items-center justify-center">
              طراحی شده با{" "}
              <Heart
                variant="Bold"
                size="24"
                color="#1a5444"
                className="mx-2"
              />{" "}
              توسط{" "}
              <a
                href="https://fatemeweb.vercel.app"
                target="_blank"
                className="mr-[5px] transition-all duration-200 ease-linear hover:text-primary-700"
              >
                فاطمه غفاری
              </a>
              <span className="mr-[6px]">و</span>
              <a
                href="https://t.me/FSPF6810"
                target="_blank"
                className="mr-[5px] transition-all duration-200 ease-linear hover:text-primary-700"
              >
                فاضل سالاری
              </a>
            </p>
          </div>
          {/* end copyright */}
        </div>
        {/* end grid cols */}
      </div>
      {/* end container */}
    </footer>
    // end footer
  );
}

export default Footer;
