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

const GET_ARTICLES_INFO = gql`
  query {
    articles {
      id
      title
      createDate
      seen
      tag
      slug
      textContent {
        html
      }
      cover1 {
        url
      }
      cover2 {
        url
      }
    }
  }
`;

const GET_ALL_COMMENTS = gql`
  query {
    comments {
      id
      name
      createDate
      rating
      text
      positivePoint
      negativePoint
      slug
      avatar {
        url
      }
      course {
        title
      }
    }
  }
`;

export { GET_COURSES_INFO, GET_ARTICLES_INFO, GET_ALL_COMMENTS };
