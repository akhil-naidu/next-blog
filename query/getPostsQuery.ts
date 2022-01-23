import { gql } from 'graphql-request';

const getPostsQuery = gql`
  query MyQuery {
    postsConnection {
      edges {
        node {
          author {
            bio
            id
            name
            photo {
              url
            }
          }
          createdAt
          excerpt
          slug
          title
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
`;

export default getPostsQuery;
