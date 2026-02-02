'use client';

import type React from 'react';
import { useEffect, useState } from 'react';

import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';
import classNames from 'classnames';
import styles from './featuredProductCard.module.scss';

interface FeaturedProductCardProp {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  feedbackCount: number;
  discount?: number;
  badges?: ('sale' | 'new' | 'best-sale')[];
  endDate: Date;
  className?: string;
}

function FeaturedProductCard({
  name,
  price,
  oldPrice,
  image,
  rating,
  feedbackCount,
  discount,
  badges,
  endDate,
  className,
}: FeaturedProductCardProp): React.ReactElement {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = (): void => {
      const difference: number = +endDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer: NodeJS.Timeout = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [endDate]);

  const formatNumber = (num: number): string => num.toString().padStart(2, '0');

  return (
    <div className={classNames(styles.featuredCard, className)}>
      <div className={styles.featuredCard_imageWrapper}>
        <div className={styles.featuredCard_image}>
          <ImagePlaceHolder src={image} alt={name} width={525} height={446} />
        </div>
        {badges && badges.length > 0 && (
          <div className={styles.featuredCard_badges}>
            {badges.includes('sale') && discount && (
              <div className={styles.featuredCard_badge__sale}>
                <Text Comp="span" size={14} weight="normal">
                  Sale
                </Text>
                <Text Comp="span" size={14} weight="medium">
                  {discount}%
                </Text>
              </div>
            )}
            {badges.includes('best-sale') && (
              <div className={styles.featuredCard_badge__bestSale}>Best Sale</div>
            )}
          </div>
        )}
        <div className={styles.featuredCard_actions}>
          <button className={styles.featuredCard_actions_wishlist} aria-label="Add to wishlist">
            <SvgInsert src="/icons/heart.svg" width={20} height={20} />
          </button>
          <button className={styles.featuredCard_actions_addToCart}>
            <Text Comp="span" size={14} weight="semibold" color="white">
              Add to Cart
            </Text>
            <SvgInsert src="/icons/bag.svg" width={16} height={16} />
          </button>
          <button className={styles.featuredCard_actions_quickView} aria-label="Quick view">
            <SvgInsert src="/icons/eye.svg" width={20} height={20} />
          </button>
        </div>
      </div>
      <div className={styles.featuredCard_info}>
        <Text
          Comp="p"
          size={18}
          weight="normal"
          color="hardPrimary"
          className={styles.featuredCard_info_name}
        >
          {name}
        </Text>
        <div className={styles.featuredCard_info_price}>
          <Text Comp="span" size={24} weight="medium" color="gray9">
            ${price.toFixed(2)}
          </Text>
          {oldPrice && (
            <Text
              Comp="span"
              size={24}
              weight="normal"
              color="gray4"
              className={styles.featuredCard_info_price_old}
            >
              ${oldPrice.toFixed(2)}
            </Text>
          )}
        </div>
        <div className={styles.featuredCard_info_ratingWrapper}>
          <div className={styles.featuredCard_info_rating}>
            {Array.from({ length: 5 }, (_, index) => (
              <SvgInsert
                key={index}
                src={index < rating ? '/icons/star-18-filled.svg' : '/icons/star-18-empty.svg'}
                width={18}
                height={18}
              />
            ))}
          </div>
          <Text Comp="span" size={12} weight="normal" color="gray5">
            ({feedbackCount} Feedback)
          </Text>
        </div>
      </div>
      <div className={styles.featuredCard_countdown}>
        <Text
          Comp="p"
          size={14}
          weight="normal"
          color="gray4"
          className={styles.featuredCard_countdown_label}
        >
          Hurry up! Offer ends In:
        </Text>
        <div className={styles.featuredCard_countdown_timer}>
          <div className={styles.featuredCard_countdown_item}>
            <Text Comp="p" size={18} weight="medium" color="gray9">
              {formatNumber(timeLeft.days)}
            </Text>
            <Text
              Comp="p"
              size={10}
              weight="medium"
              color="gray4"
              className={styles.featuredCard_countdown_item_label}
            >
              DAYS
            </Text>
          </div>
          <Text
            Comp="span"
            size={20}
            weight="normal"
            color="gray5"
            className={styles.featuredCard_countdown_separator}
          >
            :
          </Text>
          <div className={styles.featuredCard_countdown_item}>
            <Text Comp="p" size={18} weight="medium" color="gray9">
              {formatNumber(timeLeft.hours)}
            </Text>
            <Text
              Comp="p"
              size={10}
              weight="medium"
              color="gray4"
              className={styles.featuredCard_countdown_item_label}
            >
              HOURS
            </Text>
          </div>
          <Text
            Comp="span"
            size={20}
            weight="normal"
            color="gray5"
            className={styles.featuredCard_countdown_separator}
          >
            :
          </Text>
          <div className={styles.featuredCard_countdown_item}>
            <Text Comp="p" size={18} weight="medium" color="gray9">
              {formatNumber(timeLeft.minutes)}
            </Text>
            <Text
              Comp="p"
              size={10}
              weight="medium"
              color="gray4"
              className={styles.featuredCard_countdown_item_label}
            >
              MINS
            </Text>
          </div>
          <Text
            Comp="span"
            size={20}
            weight="normal"
            color="gray5"
            className={styles.featuredCard_countdown_separator}
          >
            :
          </Text>
          <div className={styles.featuredCard_countdown_item}>
            <Text Comp="p" size={18} weight="medium" color="gray9">
              {formatNumber(timeLeft.seconds)}
            </Text>
            <Text
              Comp="p"
              size={10}
              weight="medium"
              color="gray4"
              className={styles.featuredCard_countdown_item_label}
            >
              SECS
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductCard;
