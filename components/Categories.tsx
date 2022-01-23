import React from 'react';
import Link from 'next/link';
import { getCategories } from '@/services/index';
import useSWR from 'swr';

interface CategoryType {
  name: string;
  slug: string;
}

const Categories = () => {
  const { data: categories, error } = useSWR('getCategories', () => getCategories());
  if (error) console.log(error);

  return (
    <div className='bg-white shadow-lg rounded-lg p-4 mb-4'>
      <h3 className='text-xl  font-semibold border-b pb-4 mb-4'>Categories</h3>
      {categories?.map((category: CategoryType) => (
        <Link key={category.name} href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-2 mb-2'>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
