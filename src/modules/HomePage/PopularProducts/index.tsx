import type React from 'react';

import { Container } from '@/components/Container';
import FeaturedProductCard from '@/components/FeaturedProductCard';
import ProductCard from '@/components/ProductCard';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';
import styles from './popularProducts.module.scss';

const FEATURED_PRODUCT_END_DATE = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);

function PopularProducts(): React.ReactElement {
  const featuredProduct = {
    id: 1,
    name: 'Chinese cabbage',
    price: 12.0,
    oldPrice: 24.0,
    image:
      'https://images.unsplash.com/photo-1568584711271-45b2b5c0b0f5?q=80&w=800&auto=format&fit=crop',
    rating: 4,
    feedbackCount: 524,
    discount: 50,
    badges: ['sale' as const, 'best-sale' as const],
    endDate: FEATURED_PRODUCT_END_DATE,
  };

  const products = [
    {
      id: 2,
      name: 'Green Lettuce',
      price: 9.0,
      image:
        'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?q=80&w=800&auto=format&fit=crop',
      rating: 4,
    },
    {
      id: 3,
      name: 'Eggplant',
      price: 34.0,
      image:
        'https://images.unsplash.com/photo-1659261200833-ec8761558af7?q=80&w=800&auto=format&fit=crop',
      rating: 4,
    },
    {
      id: 4,
      name: 'Big Potatoes',
      price: 20.0,
      image:
        'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=800&auto=format&fit=crop',
      rating: 4,
    },
    {
      id: 5,
      name: 'Corn',
      price: 20.0,
      image:
        'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=800&auto=format&fit=crop',
      rating: 4,
    },
    {
      id: 6,
      name: 'Fresh Cauliflower',
      price: 12.0,
      image:
        'https://images.unsplash.com/photo-1568584711271-45b2b5c0b0f5?q=80&w=800&auto=format&fit=crop',
      rating: 4,
    },
    {
      id: 7,
      name: 'Green Capsicum',
      price: 9.0,
      oldPrice: 20.99,
      image:
        'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=800&auto=format&fit=crop',
      rating: 4,
      discount: 50,
      badge: 'sale' as const,
    },
    {
      id: 8,
      name: 'Green Chili',
      price: 34.0,
      image:
        'https://images.unsplash.com/photo-1583054065453-ab71aee87f80?q=80&w=800&auto=format&fit=crop',
      rating: 4,
    },
    {
      id: 9,
      name: 'Red Chili',
      price: 12.0,
      image:
        'https://images.unsplash.com/photo-1583454426824-c06c7fb4bb96?q=80&w=800&auto=format&fit=crop',
      rating: 4,
    },
    {
      id: 10,
      name: 'Red Tomatoes',
      price: 9.0,
      oldPrice: 20.99,
      image:
        'https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=800&auto=format&fit=crop',
      rating: 4,
      discount: 50,
      badge: 'sale' as const,
    },
    {
      id: 11,
      name: 'Surjapur Mango',
      price: 34.0,
      image:
        'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=800&auto=format&fit=crop',
      rating: 4,
    },
  ];

  return (
    <div className={styles.popularProducts}>
      <Container>
        <div className={styles.popularProducts_header}>
          <Text Comp="h2" size={32} weight="semibold" color="gray9">
            Hot Deals
          </Text>
          <button className={styles.popularProducts_header_viewAll}>
            <Text Comp="span" size={16} weight="medium" color="primary">
              View All
            </Text>
            <SvgInsert src="/icons/arrow-right-green.svg" width={15} height={13} />
          </button>
        </div>
        <div className={styles.popularProducts_grid}>
          <div className={styles.popularProducts_featured}>
            <FeaturedProductCard {...featuredProduct} />
          </div>
          <div className={styles.popularProducts_list}>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PopularProducts;
