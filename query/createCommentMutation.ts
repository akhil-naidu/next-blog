import { gql } from "graphql-request";

const createCommentMutation = gql`
  mutation MyMutation(
    $name: String!
    $email: String!
    $comment: String!
    $postId: ID!
  ) {
    createComment(
      data: { name: $name, email: $email, comment: $comment, post: $postId }
    ) {
      data {
        attributes {
          comment
        }
      }
    }
  }
`;

export default createCommentMutation;
