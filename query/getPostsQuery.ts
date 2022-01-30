import { gql } from 'graphql-request';

const getPostsQuery = gql`
  query MyQuery {
    posts {
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

export default getPostsQuery;
