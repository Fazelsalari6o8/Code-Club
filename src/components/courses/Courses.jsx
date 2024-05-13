// Apollo
import { useQuery } from "@apollo/client";

// components
import Loader from "../shared/loader/Loader.jsx";
import Error from "../shared/error/Error.jsx";

// queries
import { GET_COURSES_INFO } from "../../graphql/queries.js";

function Courses() {
  const { loading, data, error } = useQuery(GET_COURSES_INFO);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  console.log({ data });
  return <div>Courses</div>;
}

export default Courses;
