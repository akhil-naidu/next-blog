import { gql } from 'graphql-request';

const getCategoryPostsQuery = gql`
  query MyQuery($slug: String!) {
    posts(filters: { categories: { slug: { contains: $slug } } }) {
      data {
        id
        attributes {
          title
          slug
          excerpt
          featuredImage {
            data {
              attributes {
                url
              }
            }
          }
          categories {
            data {
              attributes {
                name
                slug
              }
            }
          }
          author {
            data {
              attributes {
                name
                photo {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          createdAt
        }
      }
    }
  }
`;

export default getCategoryPostsQuery;
