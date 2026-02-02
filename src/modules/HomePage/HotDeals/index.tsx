import type React from 'react';

import { Container } from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';
import styles from './hotDeals.module.scss';

function HotDeals(): React.ReactElement {
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
    {
      id: 6,
      name: 'Big Potatoes',
      price: 20.0,
      image:
        'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=800&auto=format&fit=crop',
      rating: 4,
    },
    {
      id: 7,
      name: 'Corn',
      price: 20.0,
      image:
        'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=800&auto=format&fit=crop',
      rating: 4,
    },
    {
      id: 8,
      name: 'Fresh Cauliflower',
      price: 12.0,
      image:
        'https://images.unsplash.com/photo-1568584711271-45b2b5c0b0f5?q=80&w=800&auto=format&fit=crop',
      rating: 4,
    },
    {
      id: 9,
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
      id: 10,
      name: 'Green Chili',
      price: 34.0,
      image:
        'https://images.unsplash.com/photo-1583054065453-ab71aee87f80?q=80&w=800&auto=format&fit=crop',
      rating: 4,
    },
  ];

  return (
    <div className={styles.hotDeals}>
      <Container>
        <div className={styles.hotDeals_header}>
          <Text Comp="h2" size={32} weight="semibold" color="gray9">
            Popular Products
          </Text>
          <button className={styles.hotDeals_header_viewAll}>
            <Text Comp="span" size={16} weight="medium" color="primary">
              View All
            </Text>
            <SvgInsert src="/icons/arrow-right-green.svg" width={15} height={13} />
          </button>
        </div>
        <div className={styles.hotDeals_grid}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default HotDeals;
