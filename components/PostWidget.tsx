import React, { useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "@/services/index";
import useSWR, { useSWRConfig } from "swr";

interface PostWidgetProps {
  slug?: string;
  categories?: { data: [{ attributes: { name: string; slug: string } }] };
}

interface PostType {
  attributes: {
    title: string;
    featuredImage: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    slug: string;
    createdAt: Date;
  };
}

const PostWidget = ({ slug, categories }: PostWidgetProps) => {
  const { mutate } = useSWRConfig();
  const variables = {
    slug,
    categories: categories?.data?.map(
      (category) => category.attributes.slug
    )[0],
  };

  const { data: posts, error } = useSWR(
    slug ? "getSimilarPosts" : "getRecentPosts",
    slug ? () => getSimilarPosts(variables) : () => getRecentPosts()
  );
  if (error) console.log(error);

  useEffect(() => {
    mutate("getSimilarPosts");
  }, [slug]);

  return (
    <div className="mb-8 rounded-lg bg-white p-4 shadow-lg">
      <h3 className="mb-4 border-b pb-4 text-xl font-semibold">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {posts?.map((post: PostType) => (
        <div
          key={post.attributes.title}
          className="mb-4 flex w-full items-center "
        >
          <div className="w-16 flex-none ">
            <img
              src={post.attributes.featuredImage.data.attributes.url}
              alt={post.attributes.title}
              height="60px"
              width="60px"
              className="rounded-2xl align-middle"
            />
          </div>
          <div className="ml-4 flex-grow">
            <p className="text-sm text-gray-500">
              {moment(post.attributes.createdAt).format("MMM D, YYYY")}
            </p>
            <Link href={`/blog/post/${post.attributes.slug}`}>
              <span className="cursor-pointer text-base text-gray-900">
                {post.attributes.title}
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
