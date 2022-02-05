import React from "react";
import Image from "next/image";

interface AuthorType {
  bio: string;
  id: string;
  name: string;
  photo: { url: string };
}

const Author = ({ author }: any) => {
  return (
    <div className="relative mt-20 mb-8 rounded-lg bg-black bg-opacity-20 p-12 text-center">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          src={author.data.attributes.photo.data.attributes.url}
          alt={author.data.attributes.name}
          unoptimized
          height="100px"
          width="100px"
          className="rounded-full align-middle"
        />
      </div>
      <h3 className="my-4 text-2xl font-bold text-white">
        {author.data.attributes.name}
      </h3>
      <p className="text-md text-gray-200">{author.data.attributes.bio}</p>
    </div>
  );
};

export default Author;
