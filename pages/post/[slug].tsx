import React, { useEffect } from 'react';
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
import useSWR, { SWRConfig, useSWRConfig } from 'swr';

const PostDetailsLayOut = () => {
  const router = useRouter();
  const { mutate } = useSWRConfig();

  const variables = {
    slug: router.query.slug,
  };

  const { data: post, error } = useSWR('getPostDetails', () => getPostDetails(variables));

  useEffect(() => {
    mutate('getPostDetails');
  }, [router.query.slug]);

  return (
    <div className='container mx-auto lg:px-10 mb-4'>
      <div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail post={post} />
          <div className='container px-4 lg:px-0 mb-4'>
            <Author author={post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8 container px-4 lg:px-0 mb-4'>
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
