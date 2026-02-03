import type React from 'react';

import { Container } from '@/components/Container';
import FeaturedProductCard from '@/components/FeaturedProductCard';
import ProductCard from '@/components/ProductCard';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';

const FEATURED_PRODUCT_END_DATE = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);

function PopularProducts(): React.ReactElement {
  const featuredProduct = {
    id: 1,
    name: 'Chinese cabbage',
    price: 12.0,
    oldPrice: 24.0,
    image: '/images/hotdeal/Image-1.jpg',
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
      image: '/images/hotdeal/Image-2.jpg',
      rating: 4,
    },
    {
      id: 3,
      name: 'Eggplant',
      price: 34.0,
      image: '/images/hotdeal/Image-3.jpg',
      rating: 4,
    },
    {
      id: 4,
      name: 'Big Potatoes',
      price: 20.0,
      image: '/images/hotdeal/Image-4.jpg',
      rating: 4,
    },
    {
      id: 5,
      name: 'Corn',
      price: 20.0,
      image: '/images/hotdeal/Image-5.jpg',
      rating: 4,
    },
    {
      id: 6,
      name: 'Fresh Cauliflower',
      price: 12.0,
      image: '/images/hotdeal/Image-6.jpg',
      rating: 4,
    },
    {
      id: 7,
      name: 'Green Capsicum',
      price: 9.0,
      oldPrice: 20.99,
      image: '/images/hotdeal/Image-7.jpg',
      rating: 4,
      discount: 50,
      badge: 'sale' as const,
    },
    {
      id: 8,
      name: 'Green Chili',
      price: 34.0,
      image: '/images/hotdeal/Image-8.jpg',
      rating: 4,
    },
    {
      id: 9,
      name: 'Red Chili',
      price: 12.0,
      image: '/images/hotdeal/Image-9.jpg',
      rating: 4,
    },
    {
      id: 10,
      name: 'Red Tomatoes',
      price: 9.0,
      oldPrice: 20.99,
      image: '/images/hotdeal/Image-10.jpg',
      rating: 4,
      discount: 50,
      badge: 'sale' as const,
    },
    {
      id: 11,
      name: 'Surjapur Mango',
      price: 34.0,
      image: '/images/hotdeal/Image-11.jpg',
      rating: 4,
    },
  ];

  return (
    <div className="py-[60px] bg-white">
      <Container>
        <div className="flex items-center justify-between mb-10 gap-4 flex-wrap">
          <Text Comp="h2" size={32} weight="semibold" color="gray9">
            Hot Deals
          </Text>
          <button className="flex items-center gap-2 bg-transparent border-none cursor-pointer group">
            <Text Comp="span" size={16} weight="medium" color="primary">
              View All
            </Text>
            <SvgInsert src="/icons/arrow-right-green.svg" width={15} height={13} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-10">
          <div className="md:col-span-1">
            <FeaturedProductCard {...featuredProduct} />
          </div>
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PopularProducts;
