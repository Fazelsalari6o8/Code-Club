import { gql } from "@apollo/client";

const GET_COURSES_INFO = gql`
  query {
    courses(last: 11) {
      id
      title
      time
      students
      price
      slug
      courseStatus
      image {
        url
      }
    }
  }
`;

export { GET_COURSES_INFO };
