import React from 'react';
import Image from 'next/image';

interface AuthorType {
  bio: string;
  id: string;
  name: string;
  photo: { url: string };
}

const Author = ({ author }: any) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-14'>
        <Image
          src={author.photo.url}
          alt={author.name}
          unoptimized
          height='100px'
          width='100px'
          className='align-middle rounded-full'
        />
      </div>
      <h3 className='text-white my-4 text-2xl font-bold'>{author.name}</h3>
      <p className='text-gray-200 text-md'>{author.bio}</p>
    </div>
  );
};

export default Author;
