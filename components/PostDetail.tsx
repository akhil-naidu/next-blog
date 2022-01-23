import React from 'react';
import moment from 'moment';

interface PostType {
  author: string;
  categories: [{ name: string; slug: string }];
  content: { raw: {} };
  createdAt: Date;
  excerpt: string;
  featuredImage: { url: string };
  slug: string;
  title: string;
}

const PostDetail = ({ post }: any) => {
  const getContentFragment = (index: number, text: string, obj: any, type?: string) => {
    let modifiedText: any = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className='text-xl font-semibold mb-4'>
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case 'paragraph':
        return (
          <p key={index} className='mb-8'>
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case 'heading-four':
        return (
          <h4 key={index} className='text-md font-semibold mb-4'>
            {modifiedText.map((item: any, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case 'image':
        return (
          <img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div className='bg-white shadow-lg lg:rounded-lg p-2 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6 lg:rounded-lg rounded-lg'>
        <img src={post.featuredImage.url} alt={post.title} className='object-top h-full w-full ' />
      </div>
      <div className='px-4 lg:px-4'>
        <div className='block lg:flex text-center items-center  mb-4 w-full'>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
            <img
              src={post.author.photo.url}
              alt={post.author.name}
              height='30px'
              width='30px'
              className='align-middle rounded-full'
            />
            <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.author.name}</p>
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
            <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
        {/* Main Logic */}

        {post.content.raw.children.map((typeObj: any, index: number) => {
          const children = typeObj.children.map((item: any, itemIndex: number) =>
            getContentFragment(itemIndex, item.text, item),
          );
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
