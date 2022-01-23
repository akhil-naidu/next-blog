import type { NextApiRequest, NextApiResponse } from 'next';

import { GraphQLClient } from 'graphql-request';
import { createCommentMutation } from '@/query/index';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || '';
const graphCMSToken = process.env.GRAPHCMS_TOKEN;

const comments = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphCMSToken}`,
    },
  });

  try {
    // req.body is an object of name, email, comment and slug
    const result = await graphQLClient.request(createCommentMutation, req.body);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

export default comments;

// const {name, email, comment, slug} = req.body
// const result = await graphQLClient.request(createCommentMutation, {
//   name, email, comment, slug
// });
