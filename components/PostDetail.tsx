import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const PostDetail = ({ post }: any) => {
  return (
    <div className='bg-white shadow-lg lg:rounded-lg p-2 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6 lg:rounded-lg rounded-lg'>
        <img
          src={post.attributes.featuredImage.data.attributes.url}
          alt={post.attributes.title}
          className='object-top h-full w-full '
        />
      </div>
      <div className='px-4 lg:px-4'>
        <div className='block lg:flex text-center items-center  mb-4 w-full'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <img
              src={post.attributes.author.data.attributes.photo.data.attributes.url}
              alt={post.attributes.author.data.attributes.name}
              height='30px'
              width='30px'
              className='align-middle rounded-full'
            />
            <p className='inline align-middle text-gray-700 ml-2 text-lg'>
              {post.attributes.author.data.attributes.name}
            </p>
          </div>
          <div className='font-medium text-gray-700'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 inline mr-2 text-pink-500'
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
        <h1 className='mb-8 text-3xl font-semibold'>{post.attributes.title}</h1>
        <ReactMarkdown
          children={post.attributes.content}
          remarkPlugins={[remarkGfm]}
          className='prose'
        />
      </div>
    </div>
  );
};

export default PostDetail;
