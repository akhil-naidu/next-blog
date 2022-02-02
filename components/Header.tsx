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

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='lg:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>Next Blog</span>
          </Link>
        </div>
        <div className='hidden lg:float-left lg:contents'>
          {categories?.map((category: CategoryType) => (
            <Link key={category.attributes.name} href={`/blog/category/${category.attributes.slug}`}>
              <span className='lg:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                {category.attributes.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
