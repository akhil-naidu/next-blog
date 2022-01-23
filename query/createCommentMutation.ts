import { gql } from 'graphql-request';

const createCommentMutation = gql`
  mutation MyMutation($name: String!, $email: String!, $comment: String!, $slug: String!) {
    createComment(
      data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } }
    ) {
      name
      email
      comment
      post {
        slug
      }
      id
    }
  }
`;

export default createCommentMutation;
