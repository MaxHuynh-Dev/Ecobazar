import type React from 'react';

import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';

interface ProductCardProp {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  discount?: number;
  badge?: 'sale' | 'new' | 'best-sale' | 'out-of-stock';
  className?: string;
}

function ProductCard({
  name,
  price,
  oldPrice,
  image,
  rating,
  discount,
  badge,
  className,
}: ProductCardProp): React.ReactElement {
  const getBadgeText = (): string | null => {
    if (!badge) return null;
    if (badge === 'sale' && discount) return `Sale ${String(discount)}%`;
    if (badge === 'new') return 'New';
    if (badge === 'best-sale') return 'Best Sale';
    return 'Out of Stock';
  };

  const getBadgeClass = (): string => {
    if (!badge) return '';
    if (badge === 'sale') return 'bg-red-500 text-white';
    if (badge === 'new') return 'bg-green-500 text-white';
    if (badge === 'best-sale') return 'bg-yellow-500 text-white';
    return 'bg-gray-400 text-white';
  };

  return (
    <div
      className={`relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-4 flex flex-col ${className ?? ''}`}
    >
      <div className="relative">
        <div className="rounded-xl overflow-hidden w-full flex items-center justify-center bg-gray-50 aspect-[254/230]">
          <ImagePlaceHolder src={image} alt={name} width={254} height={230} />
        </div>
        {badge && (
          <div
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold z-10 ${getBadgeClass()}`}
          >
            {getBadgeText()}
          </div>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button
            className="bg-white hover:bg-gray-100 rounded-full p-2 shadow transition"
            aria-label="Add to wishlist"
            type="button"
          >
            <SvgInsert src="/icons/heart.svg" width={20} height={20} />
          </button>
          <button
            className="bg-white hover:bg-gray-100 rounded-full p-2 shadow transition"
            aria-label="Quick view"
            type="button"
          >
            <SvgInsert src="/icons/eye.svg" width={20} height={20} />
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2 mt-4">
        <Text
          Comp="p"
          size={14}
          weight="normal"
          color="gray7"
          className="mb-1 text-gray-700 text-sm font-normal truncate"
        >
          {name}
        </Text>
        <div className="flex items-baseline gap-2">
          <Text
            Comp="span"
            size={16}
            weight="medium"
            color="gray9"
            className="text-lg font-medium text-gray-900"
          >
            ${price.toFixed(2)}
          </Text>
          {oldPrice && (
            <Text
              Comp="span"
              size={16}
              weight="normal"
              color="gray4"
              className="text-base font-normal line-through text-gray-400"
            >
              ${oldPrice.toFixed(2)}
            </Text>
          )}
        </div>
        <div className="flex items-center gap-[2px] mt-1">
          {Array.from({ length: 5 }).map((_, index: number) => (
            <SvgInsert
              key={index}
              src={index < rating ? '/icons/star-filled.svg' : '/icons/star-empty.svg'}
              width={12}
              height={12}
            />
          ))}
        </div>
      </div>
      <button
        className="absolute bottom-4 right-4 bg-primary hover:bg-primary-dark rounded-full p-3 shadow-md transition-all duration-150 flex items-center justify-center"
        aria-label="Add to cart"
        type="button"
      >
        <SvgInsert src="/icons/bag.svg" width={20} height={20} />
      </button>
    </div>
  );
}

export default ProductCard;
