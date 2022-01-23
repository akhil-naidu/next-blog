import { useContext } from 'react';
import Link from 'next/link';
import { getCategories } from '@/services/index';
import useSWR from 'swr';

interface CategoryType {
  name: string;
  slug: string;
}

const Header = () => {
  const { data: categories, error } = useSWR('getCategories', () => getCategories());
  if (error) console.log(error);

  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>Next Blog</span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {categories?.map((category: CategoryType) => (
            <Link key={category.name} href={`/category/${category.slug}`}>
              <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
