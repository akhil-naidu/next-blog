import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { getCategories, getCategoryPost } from "@/services/index";
import { PostCard, Categories } from "@/components/index";
import { GetStaticPaths, GetStaticProps } from "next";
import useSWR, { SWRConfig, useSWRConfig } from "swr";

const CategoryPostLayout = () => {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const variables = {
    slug: router.query.slug,
  };

  const { data: posts, error } = useSWR("getCategoryPost", () =>
    getCategoryPost(variables)
  );

  useEffect(() => {
    mutate("getCategoryPost");
  }, [router.query.slug]);

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts?.map((post: any, index: number) => (
            <PostCard key={index} post={post.attributes} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryPost = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <CategoryPostLayout />
    </SWRConfig>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const variables = {
    slug: params?.slug,
  };
  const posts = (await getCategoryPost(variables)) || [];

  const identifier = "getCategoryPost";

  return {
    props: {
      fallback: {
        [identifier]: posts,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getCategories();
  const paths = categories.map((category: any) => ({
    params: { slug: category.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default CategoryPost;
