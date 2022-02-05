import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const PostDetail = ({ post }: any) => {
  return (
    <div className='mb-8 bg-white p-2 pb-12 shadow-lg lg:rounded-lg'>
      <div className='relative mb-6 overflow-hidden rounded-lg shadow-md lg:rounded-lg'>
        <img
          src={post.attributes.featuredImage.data.attributes.url}
          alt={post.attributes.title}
          className='aspect-video h-full max-h-96 w-full object-cover '
        />
      </div>
      <div className='px-4'>
        <div className='mb-4 block w-full items-center justify-center text-center lg:flex'>
          <div className='mb-4 flex w-full items-center justify-center lg:mb-0 lg:w-auto'>
            <img
              src={post.attributes.author.data.attributes.photo.data.attributes.url}
              alt={post.attributes.author.data.attributes.name}
              height='30px'
              width='30px'
              className='rounded-full align-middle'
            />
            <p className='ml-2 inline align-middle text-lg text-gray-700'>
              {post.attributes.author.data.attributes.name}
            </p>
          </div>
          <div className='ml-4 font-medium text-gray-700'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='mr-2 inline h-6 w-6 text-pink-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
            <span>{moment(post.attributes.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className='mb-8 text-center text-3xl font-semibold'>{post.attributes.title}</h1>
        <ReactMarkdown
          children={post.attributes.content}
          remarkPlugins={[remarkGfm]}
          className='prose mx-auto'
        />
      </div>
    </div>
  );
};

export default PostDetail;
