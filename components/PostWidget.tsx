import React, { useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '@/services/index';
import useSWR, { useSWRConfig } from 'swr';

interface PostWidgetProps {
  slug?: string;
  categories?: [{ name: string; slug: string }];
}

interface PostType {
  title: string;
  featuredImage: { url: string };
  slug: string;
  createdAt: Date;
}

const PostWidget = ({ slug, categories }: PostWidgetProps) => {
  const { mutate } = useSWRConfig();
  const variables = {
    slug,
    categories: categories?.map((category) => category.slug),
  };

  const { data: posts, error } = useSWR(
    slug ? 'getSimilarPosts' : 'getRecentPosts',
    slug ? () => getSimilarPosts(variables) : () => getRecentPosts(),
  );
  if (error) console.log(error);

  useEffect(() => {
    mutate('getSimilarPosts');
  }, [slug]);

  return (
    <div className='bg-white shadow-lg rounded-lg p-4 mb-8'>
      <h3 className='text-xl mb-4 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {posts?.map((post: PostType) => (
        <div key={post.title} className='flex items-center w-full mb-4 '>
          <div className='w-16 flex-none '>
            <img
              src={post.featuredImage.url}
              alt={post.title}
              height='60px'
              width='60px'
              className='align-middle rounded-2xl'
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 text-sm'>{moment(post.createdAt).format('MMM D, YYYY')}</p>
            <Link href={`/post/${post.slug}`}>
              <span className='text-gray-900 text-base cursor-pointer'>{post.title}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
