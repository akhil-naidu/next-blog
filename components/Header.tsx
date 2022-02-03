import { useContext } from 'react';
import Link from 'next/link';
import { getCategories } from '@/services/index';
import useSWR from 'swr';

interface CategoryType {
  attributes: {
    name: string;
    slug: string;
  };
}

const Header = () => {
  const { data: categories, error } = useSWR('getCategories', () => getCategories());
  if (error) console.log(error);

  // return (
  //   <div className='container mx-auto px-10 mb-8'>

  //     <div className='border-b w-full inline-block border-blue-400 py-8'>
  //       <div className='lg:float-left block'>
  //         <Link href='/'>
  //           <span className='cursor-pointer font-bold text-4xl text-white'>Selfhost</span>
  //         </Link>
  //       </div>
  //       <div className='hidden lg:float-left lg:contents'>
  //         {categories?.map((category: CategoryType) => (
  //           <Link
  //             key={category.attributes.name}
  //             href={`/blog/category/${category.attributes.slug}`}
  //           >
  //             <span className='lg:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
  //               {category.attributes.name}
  //             </span>
  //           </Link>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <section className='relative w-full px-8 text-gray-200  body-font  mb-2'>
      <div className='container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl'>
        <Link href='/'>
          <span className='relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-white select-none cursor-pointer'>
            Selfhost.
          </span>
        </Link>

        <nav className='top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute'>
          <Link href='/'>
            <span className='block relative font-semibold text-lg leading-6 text-white transition duration-300 transform hover:-translate-y-1 cursor-pointer'>
              Home
            </span>
          </Link>
          <Link href='#_'>
            <span className='block relative font-semibold text-lg leading-6 text-white transition duration-300 transform hover:-translate-y-1 cursor-pointer'>
              Features
            </span>
          </Link>
          <Link href='#_'>
            <span className='block relative font-semibold text-lg leading-6 text-white transition duration-300 transform hover:-translate-y-1 cursor-pointer'>
              Pricing
            </span>
          </Link>
          <Link href='/blog'>
            <span className='block relative font-semibold text-lg leading-6 text-white transition duration-300 transform hover:-translate-y-1 cursor-pointer'>
              Blog
            </span>
          </Link>
        </nav>

        <div className='relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end'>
          <Link href='#'>
            <span className='inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'>
              Sign in
            </span>
          </Link>
          <span className='inline-flex rounded-md shadow-sm'>
            <Link href='#'>
              <span className='inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-pink-100 border border-pink-700 rounded-md shadow-sm hover:text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-300 ease-out'>
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
