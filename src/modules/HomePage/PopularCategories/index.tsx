import { Container } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';
import classNames from 'classnames';
import type React from 'react';
import styles from './popularCategories.module.scss';

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
      className={classNames(styles.categoryCard, {
        [styles.categoryCard__highlighted]: category.isHighlighted,
      })}
    >
      <div className={styles.categoryCard_image}>
        <ImagePlaceHolder src={category.image} alt={category.name} width={190} height={130} />
      </div>
      <Text
        Comp="p"
        size={18}
        weight="medium"
        color={category.isHighlighted ? 'hardPrimary' : 'gray9'}
        className={styles.categoryCard_name}
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
    <div className={styles.popularCategories}>
      <Container>
        <div className={styles.popularCategories_header}>
          <Text Comp="h2" size={32} weight="semibold" color="gray9">
            Popular Categories
          </Text>
          <button className={styles.popularCategories_header_viewAll}>
            <Text Comp="span" size={16} weight="medium" color="primary">
              View All
            </Text>
            <SvgInsert src="/icons/arrow-right-green.svg" width={15} height={13} />
          </button>
        </div>
        <div className={styles.popularCategories_grid}>
          {categories.map((category: CategoryProp) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default PopularCategories;
