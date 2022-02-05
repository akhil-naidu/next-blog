import { gql } from "graphql-request";

const getSimilarPostsQuery = gql`
  query MyQuery($slug: String!, $categories: String!) {
    posts(
      filters: {
        slug: { notContains: $slug }
        and: { categories: { slug: { contains: $categories } } }
      }
    ) {
      data {
        id
        attributes {
          title
          slug
          createdAt
          featuredImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default getSimilarPostsQuery;
