import { gql } from 'graphql-request';

const getCommentsQuery = gql`
  query MyQuery($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      comment
      createdAt
      name
      id
    }
  }
`;

export default getCommentsQuery;
