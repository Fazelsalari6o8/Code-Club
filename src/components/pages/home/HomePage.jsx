// components
import HomeHeader from "../../intro/HomeHeader.jsx";
import CoursesOffered from "../../courses/CoursesOffered.jsx";
import Courses from "../../courses/Courses.jsx";
import OurServices from "../../ourServices/OurServices.jsx";
import Articles from "../../articles/Articles.jsx";

function HomePage() {
  return (
    <>
      <HomeHeader />
      <CoursesOffered />
      <Courses />
      <OurServices />
      <Articles />
    </>
  );
}

export default HomePage;
