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
      image:
        'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Fresh Vegetables',
      image:
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop',
      isHighlighted: true,
    },
    {
      id: 3,
      name: 'Meat & Fish',
      image:
        'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Snacks',
      image:
        'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 5,
      name: 'Beverages',
      image:
        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 6,
      name: 'Beauty & Health',
      image:
        'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 7,
      name: 'Bread & Bakery',
      image:
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 8,
      name: 'Baking Needs',
      image:
        'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 9,
      name: 'Cooking',
      image:
        'https://images.unsplash.com/photo-1556910110-a5a63dfd393c?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 10,
      name: 'Diabetic Food',
      image:
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 11,
      name: 'Dish Detergents',
      image:
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 12,
      name: 'Oil',
      image:
        'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop',
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
