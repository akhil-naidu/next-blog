import { GraphQLClient, request } from 'graphql-request';
import {
  getPostsQuery,
  getPostDetailsQuery,
  getRecentPostsQuery,
  getSimilarPostsQuery,
  getCategoriesQuery,
  createCommentMutation,
  getCommentsQuery,
} from '@/query/index';

export const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';
const graphCMSToken = process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN;

export const getPosts = async () => {
  const result = await request(graphqlAPI, getPostsQuery);
  return result.postsConnection.edges;
};

interface postDetailsVariablesType {
  slug?: string | string[];
}
export const getPostDetails = async (variables: postDetailsVariablesType) => {
  const result = await request(graphqlAPI, getPostDetailsQuery, variables);
  return result.post;
};

export const getRecentPosts = async () => {
  const result = await request(graphqlAPI, getRecentPostsQuery);
  return result.posts;
};

interface similarPostsVariablesType {
  slug?: string;
  categories?: any;
}
export const getSimilarPosts = async (variables: similarPostsVariablesType) => {
  const result = await request(graphqlAPI, getSimilarPostsQuery, variables);
  return result.posts;
};

export const getCategories = async () => {
  const result = await request(graphqlAPI, getCategoriesQuery);
  return result.categories;
};

interface CommentObjType {
  name: string;
  email: string;
  comment: string;
  slug: string;
}
export const submitComment = async (variables: CommentObjType) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphCMSToken}`,
    },
  });

  const result = await graphQLClient.request(createCommentMutation, variables);
  return result.createComment;
};

interface SlugType {
  slug: string;
}
export const getComments = async (variables: SlugType) => {
  const result = await request(graphqlAPI, getCommentsQuery, variables);

  return result.comments;
};
