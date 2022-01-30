import { gql } from 'graphql-request';

const getRecentPostsQuery = gql`
  query MyQuery {
    posts(pagination: { limit: 3 }, sort: "createdAt") {
      data {
        attributes {
          title
          slug
          featuredImage {
            data {
              attributes {
                url
              }
            }
          }
          createdAt
        }
      }
    }
  }
`;

export default getRecentPostsQuery;
