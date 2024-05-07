const menuItem = [
  { path: "/", title: "خانه" },
  { path: "/courses", title: "دوره ها" },
  { path: "/news", title: "اخبار" },
  { path: "/articles", title: "مقالات" },
  { path: "/comments", title: "نظرات" },
  { path: "/contact-us", title: "تماس با ما" },
  { path: "/about-us", title: "درباره ما" },
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

export { menuItem, changeCss };
