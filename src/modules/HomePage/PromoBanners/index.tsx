'use client';

import { Container } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';
import type React from 'react';
import { useEffect, useState } from 'react';

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

const bgColors: Record<string, string> = {
  blue: 'bg-gradient-to-br from-[#12acec] to-[#50e6b1]',
  black: 'bg-gradient-to-br from-gray-900 to-gray-800',
  yellow: 'bg-gradient-to-br from-yellow-300 to-yellow-500',
};

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
    <div className="flex items-center gap-2 mt-5 mb-3">
      <div className="flex flex-col items-center">
        <Text
          Comp="p"
          size={24}
          weight="normal"
          color="white"
          className="text-2xl font-normal text-white bg-white/10 rounded-md px-4 py-[6px] mb-1"
        >
          {formatNumber(timeLeft.days)}
        </Text>
        <Text
          Comp="p"
          size={12}
          weight="normal"
          className="text-xs font-normal text-white tracking-wider"
        >
          DAYS
        </Text>
      </div>
      <Text Comp="span" size={24} weight="normal" className="text-2xl text-white mx-1">
        :
      </Text>
      <div className="flex flex-col items-center">
        <Text
          Comp="p"
          size={24}
          weight="normal"
          color="white"
          className="text-2xl font-normal text-white bg-white/10 rounded-md px-4 py-[6px] mb-1"
        >
          {formatNumber(timeLeft.hours)}
        </Text>
        <Text
          Comp="p"
          size={12}
          weight="normal"
          className="text-xs font-normal text-white tracking-wider"
        >
          HOURS
        </Text>
      </div>
      <Text Comp="span" size={24} weight="normal" className="text-2xl text-white mx-1">
        :
      </Text>
      <div className="flex flex-col items-center">
        <Text
          Comp="p"
          size={24}
          weight="normal"
          color="white"
          className="text-2xl font-normal text-white bg-white/10 rounded-md px-4 py-[6px] mb-1"
        >
          {formatNumber(timeLeft.minutes)}
        </Text>
        <Text
          Comp="p"
          size={12}
          weight="normal"
          className="text-xs font-normal text-white tracking-wider"
        >
          MINS
        </Text>
      </div>
      <Text Comp="span" size={24} weight="normal" className="text-2xl text-white mx-1">
        :
      </Text>
      <div className="flex flex-col items-center">
        <Text
          Comp="p"
          size={24}
          weight="normal"
          color="white"
          className="text-2xl font-normal text-white bg-white/10 rounded-md px-4 py-[6px] mb-1"
        >
          {formatNumber(timeLeft.seconds)}
        </Text>
        <Text
          Comp="p"
          size={12}
          weight="normal"
          className="text-xs font-normal text-white tracking-wider"
        >
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
    <div
      className={`relative rounded-[12px] overflow-hidden shadow-lg flex flex-col min-h-[420px] h-full ${bgColors[banner.bgColor] || ''}`}
    >
      <div className="absolute left-0 top-0 w-full h-full z-0">
        <ImagePlaceHolder
          src={banner.bgImage}
          alt={banner.title}
          width={424}
          height={536}
          className="object-cover w-full h-full opacity-50"
        />
      </div>
      <div className="relative flex flex-col z-10 p-8 h-full">
        {banner.subtitle && (
          <Text
            Comp="p"
            size={14}
            weight="medium"
            color="white"
            className="uppercase tracking-wider mb-2 text-white"
          >
            {banner.subtitle}
          </Text>
        )}
        <Text
          Comp="h3"
          size={40}
          weight="semibold"
          color="white"
          className="font-semibold text-white text-[40px] leading-tight mb-4"
        >
          {banner.title}
        </Text>
        {banner.type === 'countdown' && banner.endDate && (
          <CountdownTimer endDate={banner.endDate} />
        )}
        {banner.type === 'price' && banner.price && (
          <div className="flex gap-3 items-end mt-4">
            <Text Comp="span" size={18} weight="normal" color="white" className="text-white">
              Started at
            </Text>
            <Text
              Comp="span"
              size={18}
              weight="semibold"
              className="text-white font-semibold text-lg bg-black/30 px-3 py-1 rounded"
            >
              {banner.price}
            </Text>
          </div>
        )}
        {banner.type === 'discount' && banner.discount && (
          <div className="flex gap-3 items-end mt-4">
            <Text Comp="span" size={18} weight="normal" color="white" className="text-white">
              Up to
            </Text>
            <Text
              Comp="span"
              size={18}
              weight="semibold"
              className="text-yellow-800 font-semibold text-lg bg-yellow-300 px-3 py-1 rounded"
            >
              {banner.discount}
            </Text>
          </div>
        )}
        <button className="mt-auto flex items-center gap-2 bg-white px-6 py-2 rounded-lg shadow-md border-none outline-none focus:ring-2 ring-primary cursor-pointer">
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
      bgImage: '/images/hotdeal/Image-10.jpg',
      // endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
    {
      id: 2,
      type: 'price',
      title: 'Low-Fat Meat',
      subtitle: '85% FAT FREE',
      ctaText: 'Shop Now',
      bgColor: 'black',
      bgImage: '/images/hotdeal/Image-10.jpg',
      price: '$79.99',
    },
    {
      id: 3,
      type: 'discount',
      title: '100% Fresh Fruit',
      subtitle: 'SUMMER SALE',
      ctaText: 'Shop Now',
      bgColor: 'yellow',
      bgImage: '/images/hotdeal/Image-10.jpg',
      discount: '64% OFF',
    },
  ];

  return (
    <div className="py-[60px]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {banners.map((banner: BannerProp) => (
            <BannerCard key={banner.id} banner={banner} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default PromoBanners;
