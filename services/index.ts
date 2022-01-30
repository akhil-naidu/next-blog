import { GraphQLClient, request } from 'graphql-request';
import {
  getPostsQuery,
  getPostDetailsQuery,
  getRecentPostsQuery,
  getSimilarPostsQuery,
  getCategoriesQuery,
  createCommentMutation,
  getCommentsQuery,
  getCategoryPostsQuery,
} from '@/query/index';

export const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';
export const strapiAPI = process.env.NEXT_PUBLIC_STRAPICMS_ENDPOINT || '';
const graphCMSToken = process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN;
const strapiFullToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN_FULL;
const strapiReadToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN_READ;

export const graphQLClient = (token: string | undefined) => {
  return new GraphQLClient(strapiAPI, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

export const getPosts = async () => {
  const result = await graphQLClient(strapiReadToken).request(getPostsQuery);
  return result.posts.data;
};

interface postDetailsVariablesType {
  slug?: string | string[];
}
export const getPostDetails = async (variables: postDetailsVariablesType) => {
  const result = await graphQLClient(strapiReadToken).request(getPostDetailsQuery, variables);
  return result.posts.data[0];
};

export const getRecentPosts = async () => {
  const result = await graphQLClient(strapiReadToken).request(getRecentPostsQuery);
  return result.posts.data;
};

interface similarPostsVariablesType {
  slug?: string;
  categories?: any;
}
export const getSimilarPosts = async (variables: similarPostsVariablesType) => {
  const result = await graphQLClient(strapiReadToken).request(getSimilarPostsQuery, variables);
  return result.posts.data;
};

export const getCategories = async () => {
  const result = await graphQLClient(strapiReadToken).request(getCategoriesQuery);
  return result.categories.data;
};

interface CommentObjType {
  name: string;
  email: string;
  comment: string;
  postId: number;
}
export const submitComment = async (variables: CommentObjType) => {
  // const graphQLClient = new GraphQLClient(graphqlAPI, {
  //   headers: {
  //     authorization: `Bearer ${graphCMSToken}`,
  //   },
  // });

  const result = await graphQLClient(strapiFullToken).request(createCommentMutation, variables);
  return result.createComment;
};

interface SlugType {
  slug?: string | string[];
}
export const getComments = async (variables: SlugType) => {
  const result = await graphQLClient(strapiReadToken).request(getCommentsQuery, variables);
  return result.comments.data;
};

export const getCategoryPost = async (variables: SlugType) => {
  const result = await graphQLClient(strapiReadToken).request(getCategoryPostsQuery, variables);

  return result.posts.data;
};
