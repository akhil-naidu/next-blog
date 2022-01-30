import { gql } from 'graphql-request';

const getPostDetailsQuery = gql`
  query MyQuery($slug: String!) {
    posts(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          slug
          excerpt
          content
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
                bio
              }
            }
          }
          createdAt
          comments {
            data {
              attributes {
                name
                email
                comment
              }
            }
          }
        }
      }
    }
  }
`;

export default getPostDetailsQuery;
