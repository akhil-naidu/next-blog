import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }: any) => {
  return (
    <div className="mb-6 rounded-lg bg-white p-0 px-2 pt-2 pb-4 shadow-lg">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <img
          src={post.featuredImage.data.attributes.url}
          alt={post.title}
          className="relative h-96 w-full rounded-lg object-cover object-center shadow-lg "
          // className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
        />
      </div>
      <h1 className="mb-4 cursor-pointer text-center text-3xl font-semibold transition duration-500 hover:text-pink-600">
        <Link href={`/blog/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="mb-4 block w-full items-center justify-center text-center lg:flex">
        <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <img
            src={post.author.data.attributes.photo.data.attributes.url}
            alt={post.author.data.attributes.name}
            height="30px"
            width="30px"
            className="rounded-full align-middle"
          />
          <p className="ml-2 inline align-middle text-lg text-gray-700">
            {post.author.data.attributes.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 inline h-6 w-6 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className="text-grey-700 mb-4 px-4 text-center text-lg font-normal lg:px-2">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/blog/post/${post.slug}`}>
          <span className="inline-block transform cursor-pointer rounded-full bg-pink-600 px-4 py-1 text-lg text-white transition duration-500 hover:-translate-y-1">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
