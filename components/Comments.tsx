import React, { useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import useSWR, { useSWRConfig } from 'swr';
import { getComments } from '@/services/index';

interface SlugType {
  slug: string;
}

interface CommentType {
  attributes: {
    name: string;
    comment: string;
    createdAt: Date;
  };
  id: string;
}

const Comments = ({ slug }: SlugType) => {
  const { mutate } = useSWRConfig();
  const variables = {
    slug,
  };

  const { data: comments, error } = useSWR('getComments', () => getComments(variables));

  useEffect(() => {
    mutate('getComments');
  }, [slug]);

  return (
    <>
      {comments?.length > 0 && (
        <div className='bg-white shadow-lg rounded-lg p-4 pb-4 mb-4'>
          <h3 className='text-xl mb-4 font-semibold border-b pb-4'>
            {comments?.length === 1 ? `1 Comment` : `${comments?.length} Comments`}
          </h3>
          {comments?.map((comment: CommentType) => (
            <div
              key={comment.id}
              className='border-b border-gray-100 mb-2 pb-2 bg-black bg-opacity-10 p-2 px-4 rounded-lg'
            >
              <p className='mb-1 '>
                <span className='font-semibold'>{comment.attributes.name}</span> on{' '}
                {moment(comment.attributes.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className='whitespace-pre-line text-gray-600 w-full'>
                {parse(comment.attributes.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
