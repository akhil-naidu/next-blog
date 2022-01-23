import { gql } from 'graphql-request';

const getRecentPostsQuery = gql`
  query MyQuery {
    posts(orderBy: createdAt_ASC, last: 3) {
      title
      slug
      featuredImage {
        url
      }
      createdAt
    }
  }
`;

export default getRecentPostsQuery;
