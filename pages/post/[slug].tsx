import React from 'react';
import { useRouter } from 'next/router';
import { getPosts, getPostDetails } from '@/services/index';
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
} from '@/components/index';
import { GetStaticPaths, GetStaticProps } from 'next';
import useSWR, { SWRConfig } from 'swr';

const PostDetailsLayOut = () => {
  const router = useRouter();

  const variables = {
    slug: router.query.slug,
  };

  const { data: post, error } = useSWR('getPostDetails', () => getPostDetails(variables));

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
        <div className='col-span-1 md:col-span-8'>
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className='col-span-1 md:col-span-4'>
          <div className='relative md:sticky top-8'>
            <PostWidget slug={post.slug} categories={post.categories} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

const PostDetails = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <PostDetailsLayOut />
    </SWRConfig>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const variables = {
    slug: params?.slug,
  };
  const post = (await getPostDetails(variables)) || [];
  const identifier = 'getPostDetails';

  return {
    props: {
      fallback: {
        [identifier]: post,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = (await getPosts()) || [];
  const paths = posts.map((post: any) => ({
    params: { slug: post.node.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default PostDetails;
