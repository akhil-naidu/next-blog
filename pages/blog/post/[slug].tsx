import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { getPosts, getPostDetails } from "@/services/index";
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
} from "@/components/index";
import { GetStaticPaths, GetStaticProps } from "next";
import useSWR, { SWRConfig, useSWRConfig } from "swr";

const PostDetailsLayOut = () => {
  const router = useRouter();
  const { mutate } = useSWRConfig();

  const variables = {
    slug: router.query.slug,
  };

  const { data: post, error } = useSWR("getPostDetails", () =>
    getPostDetails(variables)
  );

  useEffect(() => {
    mutate("getPostDetails");
  }, [router.query.slug]);

  return (
    <div className="container mx-auto mb-4 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <div className="container mb-4 px-4 lg:px-0">
            <Author author={post.attributes.author} />
            <CommentsForm postId={post.id} />
            <Comments slug={post.attributes.slug} />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="container relative top-8 mb-4 px-4 lg:sticky lg:px-0">
            <PostWidget
              slug={post.attributes.slug}
              categories={post.attributes.categories}
            />
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
  const identifier = "getPostDetails";

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
    params: { slug: post.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default PostDetails;
