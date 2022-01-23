import { gql } from 'graphql-request';

const getSimilarPostsQuery = gql`
  query MyQuery($slug: String!, $categories: [String!]) {
    posts(where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }, last: 3) {
      title
      slug
      featuredImage {
        url
      }
      createdAt
    }
  }
`;

export default getSimilarPostsQuery;
