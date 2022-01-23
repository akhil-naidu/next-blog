import { gql } from 'graphql-request';

const getCategoriesQuery = gql`
  query MyQuery {
    categories {
      name
      slug
    }
  }
`;

export default getCategoriesQuery;
