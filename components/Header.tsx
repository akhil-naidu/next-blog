import Link from "next/link";
import { getCategories } from "@/services/index";
import useSWR from "swr";

const Header = () => {
  const { data: categories, error } = useSWR("getCategories", () =>
    getCategories()
  );
  if (error) console.log(error);

  return (
    <section className="body-font fixed  z-20 w-full bg-gray-800  px-4  py-4  text-gray-200 ">
      <div className="container mx-auto flex max-w-7xl flex-col flex-wrap  items-center justify-between md:flex-row">
        <Link href="/">
          <span className="relative z-10 flex w-auto cursor-pointer select-none items-center text-2xl font-extrabold leading-none text-white">
            Selfhost.
          </span>
        </Link>

        <nav className="hidden md:absolute md:top-0 md:left-0 md:z-0 md:-ml-5 md:flex md:h-full md:w-full md:items-center md:justify-center md:space-x-5 md:py-0 md:text-base lg:-ml-0 ">
          <Link href="/">
            <span className="relative block transform cursor-pointer text-lg font-semibold leading-6 text-white transition duration-300 hover:-translate-y-1">
              Home
            </span>
          </Link>
          <Link href="#_">
            <span className="relative block transform cursor-pointer text-lg font-semibold leading-6 text-white transition duration-300 hover:-translate-y-1">
              Features
            </span>
          </Link>
          <Link href="#_">
            <span className="relative block transform cursor-pointer text-lg font-semibold leading-6 text-white transition duration-300 hover:-translate-y-1">
              Pricing
            </span>
          </Link>
          <Link href="/blog">
            <span className="relative block transform cursor-pointer text-lg font-semibold leading-6 text-white transition duration-300 hover:-translate-y-1">
              Blog
            </span>
          </Link>
        </nav>

        <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 md:justify-end">
          <Link href="#">
            <span className="whitespace-no-wrap inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-1 text-base font-medium leading-6 text-gray-600 shadow-sm hover:bg-gray-50 focus:shadow-none focus:outline-none">
              Sign in
            </span>
          </Link>
          <span className="inline-flex rounded-md shadow-sm">
            <Link href="#">
              <span className="whitespace-no-wrap inline-flex items-center justify-center rounded-md  border border-pink-700 bg-pink-100 px-4 py-1 text-base font-medium leading-6 text-gray-600 shadow-sm transition duration-300 ease-out hover:bg-pink-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                Sign up
              </span>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;
