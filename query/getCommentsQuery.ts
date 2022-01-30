import { gql } from 'graphql-request';

const getCommentsQuery = gql`
  query MyQuery($slug: String!) {
    comments(filters: { post: { slug: { eq: $slug } } }) {
      data {
        id
        attributes {
          name
          email
          comment
          createdAt
        }
      }
    }
  }
`;

export default getCommentsQuery;
