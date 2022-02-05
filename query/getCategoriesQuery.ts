import { gql } from "graphql-request";

const getCategoriesQuery = gql`
  query MyQuery {
    categories {
      data {
        attributes {
          name
          slug
        }
      }
    }
  }
`;

export default getCategoriesQuery;
