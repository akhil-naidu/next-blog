import Head from "next/head";
import { PostCard, Categories, PostWidget } from "@/components/index";
import { getPosts } from "@/services/index";
import { GetStaticProps } from "next";
import useSWR, { SWRConfig } from "swr";

const HomeLayout = () => {
  const { data: posts, error } = useSWR("getPosts", () => getPosts());
  return (
    <div className=" container mx-auto mb-4 px-2 md:px-4 lg:px-10 ">
      <Head>
        <title>Selfhost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="scroll-smooth">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post: any) => (
              <PostCard key={post.attributes.title} post={post.attributes} />
            ))}
          </div>

          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-24 lg:sticky">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <HomeLayout />
    </SWRConfig>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getPosts()) || [];
  const identifier = "getPosts";

  return {
    props: {
      fallback: {
        [identifier]: posts,
      },
    },
  };
};

export default Home;
