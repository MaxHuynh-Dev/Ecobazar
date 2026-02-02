import type React from 'react';

import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';
import classNames from 'classnames';
import styles from './productCard.module.scss';

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
    if (badge === 'sale') return styles.productCard_badge__sale;
    if (badge === 'new') return styles.productCard_badge__new;
    if (badge === 'best-sale') return styles.productCard_badge__bestSale;
    return styles.productCard_badge__outOfStock;
  };

  return (
    <div className={classNames(styles.productCard, className)}>
      <div className={styles.productCard_imageWrapper}>
        <div className={styles.productCard_image}>
          <ImagePlaceHolder src={image} alt={name} width={254} height={230} />
        </div>
        {badge && (
          <div className={classNames(styles.productCard_badge, getBadgeClass())}>
            {getBadgeText()}
          </div>
        )}
        <div className={styles.productCard_actions}>
          <button className={styles.productCard_actions_btn} aria-label="Add to wishlist">
            <SvgInsert src="/icons/heart.svg" width={20} height={20} />
          </button>
          <button className={styles.productCard_actions_btn} aria-label="Quick view">
            <SvgInsert src="/icons/eye.svg" width={20} height={20} />
          </button>
        </div>
      </div>
      <div className={styles.productCard_info}>
        <Text
          Comp="p"
          size={14}
          weight="normal"
          color="gray7"
          className={styles.productCard_info_name}
        >
          {name}
        </Text>
        <div className={styles.productCard_info_price}>
          <Text Comp="span" size={16} weight="medium" color="gray9">
            ${price.toFixed(2)}
          </Text>
          {oldPrice && (
            <Text
              Comp="span"
              size={16}
              weight="normal"
              color="gray4"
              className={styles.productCard_info_price_old}
            >
              ${oldPrice.toFixed(2)}
            </Text>
          )}
        </div>
        <div className={styles.productCard_info_rating}>
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
      <button className={styles.productCard_addToCart} aria-label="Add to cart">
        <SvgInsert src="/icons/bag.svg" width={20} height={20} />
      </button>
    </div>
  );
}

export default ProductCard;
