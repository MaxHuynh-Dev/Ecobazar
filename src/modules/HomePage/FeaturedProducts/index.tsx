import type React from 'react';

import { Container } from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';
import styles from './featuredProducts.module.scss';

function FeaturedProducts(): React.ReactElement {
  const products = [
    {
      id: 1,
      name: 'Green Apple',
      price: 14.99,
      oldPrice: 20.99,
      image:
        'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=800&auto=format&fit=crop',
      rating: 4,
      discount: 50,
      badge: 'sale' as const,
    },
    {
      id: 2,
      name: 'Fresh Indian Malta',
      price: 20.0,
      image:
        'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=800&auto=format&fit=crop',
      rating: 4,
    },
    {
      id: 3,
      name: 'Chinese cabbage',
      price: 12.0,
      image:
        'https://images.unsplash.com/photo-1568584711271-45b2b5c0b0f5?q=80&w=800&auto=format&fit=crop',
      rating: 4,
    },
    {
      id: 4,
      name: 'Green Lettuce',
      price: 9.0,
      image:
        'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?q=80&w=800&auto=format&fit=crop',
      rating: 4,
    },
    {
      id: 5,
      name: 'Eggplant',
      price: 34.0,
      image:
        'https://images.unsplash.com/photo-1659261200833-ec8761558af7?q=80&w=800&auto=format&fit=crop',
      rating: 4,
    },
  ];

  return (
    <div className={styles.featuredProducts}>
      <Container>
        <div className={styles.featuredProducts_header}>
          <Text Comp="h2" size={32} weight="semibold" color="gray9">
            Featured Products
          </Text>
          <button className={styles.featuredProducts_header_viewAll}>
            <Text Comp="span" size={16} weight="medium" color="primary">
              View All
            </Text>
            <SvgInsert src="/icons/arrow-right-green.svg" width={15} height={13} />
          </button>
        </div>
        <div className={styles.featuredProducts_grid}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default FeaturedProducts;
