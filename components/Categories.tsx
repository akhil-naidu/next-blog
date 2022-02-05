import React from "react";
import Link from "next/link";
import { getCategories } from "@/services/index";
import useSWR from "swr";

interface CategoryType {
  attributes: {
    name: string;
    slug: string;
  };
}

const Categories = () => {
  const { data: categories, error } = useSWR("getCategories", () =>
    getCategories()
  );
  if (error) console.log(error);

  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-lg">
      <h3 className="mb-4  border-b pb-4 text-xl font-semibold">Categories</h3>
      {categories?.map((category: CategoryType) => (
        <Link
          key={category.attributes.name}
          href={`/blog/category/${category.attributes.slug}`}
        >
          <span className="mb-2 block cursor-pointer pb-2">
            {category.attributes.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
