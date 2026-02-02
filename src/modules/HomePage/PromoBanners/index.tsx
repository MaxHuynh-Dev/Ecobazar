'use client';

import { Container } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';
import classNames from 'classnames';
import type React from 'react';
import { useEffect, useState } from 'react';
import styles from './promoBanners.module.scss';

interface CountdownTimerProp {
  endDate: Date;
}

interface BannerProp {
  id: number;
  type: 'countdown' | 'price' | 'discount';
  title: string;
  subtitle?: string;
  description?: string;
  ctaText: string;
  bgColor: string;
  bgImage: string;
  endDate?: Date;
  price?: string;
  discount?: string;
}

const CountdownTimer = ({ endDate }: CountdownTimerProp): React.JSX.Element => {
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
    <div className={styles.countdown}>
      <div className={styles.countdown_item}>
        <Text
          Comp="p"
          size={24}
          weight="normal"
          color="white"
          className={styles.countdown_item_value}
        >
          {formatNumber(timeLeft.days)}
        </Text>
        <Text Comp="p" size={12} weight="normal" className={styles.countdown_item_label}>
          DAYS
        </Text>
      </div>
      <Text Comp="span" size={24} weight="normal" className={styles.countdown_separator}>
        :
      </Text>
      <div className={styles.countdown_item}>
        <Text
          Comp="p"
          size={24}
          weight="normal"
          color="white"
          className={styles.countdown_item_value}
        >
          {formatNumber(timeLeft.hours)}
        </Text>
        <Text Comp="p" size={12} weight="normal" className={styles.countdown_item_label}>
          HOURS
        </Text>
      </div>
      <Text Comp="span" size={24} weight="normal" className={styles.countdown_separator}>
        :
      </Text>
      <div className={styles.countdown_item}>
        <Text
          Comp="p"
          size={24}
          weight="normal"
          color="white"
          className={styles.countdown_item_value}
        >
          {formatNumber(timeLeft.minutes)}
        </Text>
        <Text Comp="p" size={12} weight="normal" className={styles.countdown_item_label}>
          MINS
        </Text>
      </div>
      <Text Comp="span" size={24} weight="normal" className={styles.countdown_separator}>
        :
      </Text>
      <div className={styles.countdown_item}>
        <Text
          Comp="p"
          size={24}
          weight="normal"
          color="white"
          className={styles.countdown_item_value}
        >
          {formatNumber(timeLeft.seconds)}
        </Text>
        <Text Comp="p" size={12} weight="normal" className={styles.countdown_item_label}>
          SECS
        </Text>
      </div>
    </div>
  );
};

interface BannerCardProp {
  banner: BannerProp;
}

const BannerCard = ({ banner }: BannerCardProp): React.JSX.Element => {
  return (
    <div className={classNames(styles.banner, styles[`banner__${banner.bgColor}`])}>
      <div className={styles.banner_bg}>
        <ImagePlaceHolder src={banner.bgImage} alt={banner.title} width={424} height={536} />
      </div>
      <div className={styles.banner_content}>
        {banner.subtitle && (
          <Text
            Comp="p"
            size={14}
            weight="medium"
            color="white"
            className={styles.banner_content_subtitle}
          >
            {banner.subtitle}
          </Text>
        )}
        <Text
          Comp="h3"
          size={40}
          weight="semibold"
          color="white"
          className={styles.banner_content_title}
        >
          {banner.title}
        </Text>
        {banner.type === 'countdown' && banner.endDate && (
          <CountdownTimer endDate={banner.endDate} />
        )}
        {banner.type === 'price' && banner.price && (
          <div className={styles.banner_content_price}>
            <Text Comp="span" size={18} weight="normal" color="white">
              Started at
            </Text>
            <Text
              Comp="span"
              size={18}
              weight="semibold"
              className={styles.banner_content_price_value}
            >
              {banner.price}
            </Text>
          </div>
        )}
        {banner.type === 'discount' && banner.discount && (
          <div className={styles.banner_content_discount}>
            <Text Comp="span" size={18} weight="normal" color="white">
              Up to
            </Text>
            <Text
              Comp="span"
              size={18}
              weight="semibold"
              className={styles.banner_content_discount_badge}
            >
              {banner.discount}
            </Text>
          </div>
        )}
        <button className={styles.banner_content_btn}>
          <Text Comp="span" size={14} weight="semibold" color="primary">
            {banner.ctaText}
          </Text>
          <SvgInsert src="/icons/arrow-right-green.svg" width={15} height={13} />
        </button>
      </div>
    </div>
  );
};

function PromoBanners(): React.ReactElement {
  const banners: BannerProp[] = [
    {
      id: 1,
      type: 'countdown',
      title: 'Sale of the Month',
      subtitle: 'BEST DEALS',
      ctaText: 'Shop Now',
      bgColor: 'blue',
      bgImage:
        'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=800&auto=format&fit=crop',
      // endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
    {
      id: 2,
      type: 'price',
      title: 'Low-Fat Meat',
      subtitle: '85% FAT FREE',
      ctaText: 'Shop Now',
      bgColor: 'black',
      bgImage:
        'https://images.unsplash.com/photo-1588347818036-8f5e6e9d4ea8?q=80&w=800&auto=format&fit=crop',
      price: '$79.99',
    },
    {
      id: 3,
      type: 'discount',
      title: '100% Fresh Fruit',
      subtitle: 'SUMMER SALE',
      ctaText: 'Shop Now',
      bgColor: 'yellow',
      bgImage:
        'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=800&auto=format&fit=crop',
      discount: '64% OFF',
    },
  ];

  return (
    <div className={styles.promoBanners}>
      <Container>
        <div className={styles.promoBanners_grid}>
          {banners.map((banner: BannerProp) => (
            <BannerCard key={banner.id} banner={banner} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default PromoBanners;
