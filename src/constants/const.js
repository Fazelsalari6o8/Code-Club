// images
import img_onlineLearning from "../assets/images/servicesImages/serv1.svg";
import img_onlineTest from "../assets/images/servicesImages/serv2.svg";
import img_onlineVideo from "../assets/images/servicesImages/serv3.svg";

const menuItem = [
  { path: "/", title: "خانه" },
  { path: "/courses", title: "دوره ها" },
  { path: "/news", title: "اخبار" },
  { path: "/articles", title: "مقالات" },
  { path: "/comments", title: "نظرات" },
  { path: "/contact-us", title: "تماس با ما" },
  { path: "/about-us", title: "درباره ما" },
];

const coursesOfferd = [
  { courseTitle: "دوره های فرانت اند" },
  { courseTitle: "دوره های بک اند" },
  { courseTitle: "دوره های موبایل" },
  { courseTitle: "دوره های امنیت" },
  { courseTitle: "شبکه" },
  { courseTitle: "دات نت" },
  { courseTitle: "سی شارپ" },
  { courseTitle: "دوره های یونیتی" },
  { courseTitle: "دوره های فلاتر" },
];

const servicesCard = [
  { title: "یادگیری آنلاین", image: img_onlineLearning, link: "/courses" },
  { title: "آزمون های معتبر", image: img_onlineTest, link: "/courses/tests" },
  { title: "مدرس های باتجربه", image: img_onlineVideo, link: "/teachers" },
];

const monthList = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
const monthNumber = [
  { "۰": 0 },
  { "۱": 1 },
  { "۲": 2 },
  { "۳": 3 },
  { "۴": 4 },
  { "۵": 5 },
  { "۶": 6 },
  { "۷": 7 },
  { "۸": 8 },
  { "۹": 9 },
  { "۱۰": 10 },
  { "۱۱": 11 },
  { "۱۲": 12 },
];

function changeCss(tagEle) {
  if (window.scrollY > 32) {
    tagEle.style.top = "-32px";
    if (window.innerWidth > 768) {
      if (window.scrollY > 42) {
        tagEle.style.top = "-42px";
      }
    }
  } else {
    tagEle.style.top = "0";
  }
}

export {
  menuItem,
  coursesOfferd,
  servicesCard,
  monthList,
  monthNumber,
  changeCss,
};
