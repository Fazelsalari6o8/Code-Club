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

export { menuItem, coursesOfferd, changeCss };
