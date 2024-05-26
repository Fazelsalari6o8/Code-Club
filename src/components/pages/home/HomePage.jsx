// components
import HomeHeader from "../../intro/HomeHeader.jsx";
import CoursesOffered from "../../courses/CoursesOffered.jsx";
import Courses from "../../courses/Courses.jsx";
import OurServices from "../../ourServices/OurServices.jsx";

function HomePage() {
  return (
    <>
      <HomeHeader />
      <CoursesOffered />
      <Courses />
      <OurServices />
    </>
  );
}

export default HomePage;
