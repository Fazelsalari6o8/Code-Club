// Apollo
import { useQuery } from "@apollo/client";

// queries
import { GET_COURSES_INFO } from "../../graphql/queries.js";

function Courses() {
  const { loading, data, error } = useQuery(GET_COURSES_INFO);
  console.log({ loading, data, error });
  return <div>Courses</div>;
}

export default Courses;
