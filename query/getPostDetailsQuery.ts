import { gql } from 'graphql-request';

const getPostDetailsQuery = gql`
  query MyQuery($slug: String!) {
    post(where: { slug: $slug }) {
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
      content {
        raw
      }
    }
  }
`;

export default getPostDetailsQuery;
