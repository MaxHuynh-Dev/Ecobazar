import { Container } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';
import classNames from 'classnames';
import type React from 'react';

interface CategoryProp {
  id: number;
  name: string;
  image: string;
  isHighlighted?: boolean;
}

interface CategoryCardProp {
  category: CategoryProp;
}

const CategoryCard = ({ category }: CategoryCardProp): React.JSX.Element => {
  return (
    <div
      className={classNames(
        'bg-white border border-gray-100 rounded-[5px] flex flex-col items-center justify-center p-4 pb-6 gap-4 transition-shadow duration-200',
        {
          'shadow-lg border-primary ring-2 ring-primary/20 scale-105': category.isHighlighted,
          'hover:shadow-md hover:border-primary': !category.isHighlighted,
        }
      )}
    >
      <div className="w-[190px] h-[130px] flex items-center justify-center mb-2">
        <ImagePlaceHolder
          src={category.image}
          alt={category.name}
          width={190}
          height={130}
          className="object-cover w-full h-full rounded"
        />
      </div>
      <Text
        Comp="p"
        size={18}
        weight="medium"
        color={category.isHighlighted ? 'hardPrimary' : 'gray9'}
        className={classNames('text-lg font-medium', {
          'text-hardPrimary': category.isHighlighted,
          'text-gray-900': !category.isHighlighted,
        })}
      >
        {category.name}
      </Text>
    </div>
  );
};

function PopularCategories(): React.ReactElement {
  const categories: CategoryProp[] = [
    {
      id: 1,
      name: 'Fresh Fruit',
      image: '/images/categories/category 1.jpg',
    },
    {
      id: 2,
      name: 'Fresh Vegetables',
      image: '/images/categories/category 2.jpg',
      // isHighlighted: true,
    },
    {
      id: 3,
      name: 'Meat & Fish',
      image: '/images/categories/category 3.jpg',
    },
    {
      id: 4,
      name: 'Snacks',
      image: '/images/categories/category 4.jpg',
    },
    {
      id: 5,
      name: 'Beverages',
      image: '/images/categories/category 5.jpg',
    },
    {
      id: 6,
      name: 'Beauty & Health',
      image: '/images/categories/category 6.jpg',
    },
    {
      id: 7,
      name: 'Bread & Bakery',
      image: '/images/categories/category 7.jpg',
    },
    {
      id: 8,
      name: 'Baking Needs',
      image: '/images/categories/category 8.jpg',
    },
    {
      id: 9,
      name: 'Cooking',
      image: '/images/categories/category 9.jpg',
    },
    {
      id: 10,
      name: 'Diabetic Food',
      image: '/images/categories/category 10.jpg',
    },
    {
      id: 11,
      name: 'Dish Detergents',
      image: '/images/categories/category 11.jpg',
    },
    {
      id: 12,
      name: 'Oil',
      image: '/images/categories/category 12.jpg',
    },
  ];

  return (
    <div className="py-[60px]">
      <Container>
        <div className="flex items-center justify-between mb-10 gap-4 flex-wrap">
          <Text Comp="h2" size={32} weight="semibold" color="gray9">
            Popular Categories
          </Text>
          <button className="flex items-center gap-2 bg-transparent border-none cursor-pointer group">
            <Text Comp="span" size={16} weight="medium" color="primary">
              View All
            </Text>
            <SvgInsert src="/icons/arrow-right-green.svg" width={15} height={13} />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category: CategoryProp) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default PopularCategories;
