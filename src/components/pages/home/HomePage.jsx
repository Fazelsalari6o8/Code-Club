// components
import HomeHeader from "../../intro/HomeHeader.jsx";
import CoursesOffered from "../../courses/CoursesOffered.jsx";
import Courses from "../../courses/Courses.jsx";
import OurServices from "../../ourServices/OurServices.jsx";
import Articles from "../../articles/Articles.jsx";
import AboutUs from "../aboutUs/AboutUs.jsx";
import Comments from "../../comments/Comments.jsx";

function HomePage() {
  return (
    <>
      <HomeHeader />
      <CoursesOffered />
      <Courses />
      <OurServices />
      <Articles />
      <AboutUs />
      <Comments />
    </>
  );
}

export default HomePage;
