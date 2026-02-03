import type React from 'react';

import { Container } from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';

function FeaturedProducts(): React.ReactElement {
  const products = [
    {
      id: 1,
      name: 'Green Apple',
      price: 14.99,
      oldPrice: 20.99,
      image: '/images/hotdeal/Image-10.jpg',
      rating: 4,
      discount: 50,
      badge: 'sale' as const,
    },
    {
      id: 2,
      name: 'Fresh Indian Malta',
      price: 20.0,
      image: '/images/hotdeal/Image-10.jpg',
      rating: 4,
    },
    {
      id: 3,
      name: 'Chinese cabbage',
      price: 12.0,
      image: '/images/hotdeal/Image-10.jpg',
      rating: 4,
    },
    {
      id: 4,
      name: 'Green Lettuce',
      price: 9.0,
      image: '/images/hotdeal/Image-10.jpg',
      rating: 4,
    },
    {
      id: 5,
      name: 'Eggplant',
      price: 34.0,
      image: '/images/hotdeal/Image-10.jpg',
      rating: 4,
    },
  ];

  return (
    <div className="py-[60px]">
      <Container>
        <div className="flex items-center justify-between mb-10 gap-4 flex-wrap">
          <Text Comp="h2" size={32} weight="semibold" color="gray9">
            Featured Products
          </Text>
          <button className="flex items-center gap-2 bg-transparent border-none cursor-pointer group">
            <Text Comp="span" size={16} weight="medium" color="primary">
              View All
            </Text>
            <SvgInsert src="/icons/arrow-right-green.svg" width={15} height={13} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default FeaturedProducts;
