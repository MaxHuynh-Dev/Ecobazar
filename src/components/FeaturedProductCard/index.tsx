'use client';

import type React from 'react';
import { useEffect, useState } from 'react';

import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';
import classNames from 'classnames';

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
    <div
      className={classNames(
        'bg-white rounded-2xl shadow-lg flex flex-col w-full max-w-full overflow-hidden relative',
        className
      )}
    >
      {/* Image & Badges & Actions */}
      <div className="relative">
        <div className="w-full aspect-[525/446] rounded-t-2xl flex items-center justify-center overflow-hidden bg-gray-50">
          <ImagePlaceHolder src={image} alt={name} width={525} height={446} />
        </div>

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            {badges.includes('sale') && discount && (
              <div className="flex items-center gap-1 bg-primary/10 text-primary-600 rounded-full px-3 py-1 text-xs font-medium">
                <Text Comp="span" size={14} weight="normal">
                  Sale
                </Text>
                <Text Comp="span" size={14} weight="medium">
                  {discount}%
                </Text>
              </div>
            )}
            {badges.includes('best-sale') && (
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                Best Sale
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="absolute right-4 bottom-4 flex flex-col gap-2 z-10">
          <button
            className="bg-white shadow rounded-full p-2 flex items-center justify-center transition hover:bg-gray-100"
            aria-label="Add to wishlist"
            type="button"
          >
            <SvgInsert src="/icons/heart.svg" width={20} height={20} />
          </button>
          <button
            className="flex items-center gap-2 bg-primary px-4 py-2 rounded-full shadow text-white font-semibold text-sm hover:bg-primary-700 transition-all disabled:opacity-60 disabled:pointer-events-none"
            type="button"
          >
            <Text Comp="span" size={14} weight="semibold" color="white">
              Add to Cart
            </Text>
            <SvgInsert src="/icons/bag.svg" width={16} height={16} />
          </button>
          <button
            className="bg-white shadow rounded-full p-2 flex items-center justify-center transition hover:bg-gray-100"
            aria-label="Quick view"
            type="button"
          >
            <SvgInsert src="/icons/eye.svg" width={20} height={20} />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2 p-6">
        <Text
          Comp="p"
          size={18}
          weight="normal"
          color="hardPrimary"
          className="text-lg font-medium text-primary-700 mb-1 truncate"
        >
          {name}
        </Text>
        <div className="flex items-baseline gap-2">
          <Text
            Comp="span"
            size={24}
            weight="medium"
            color="gray9"
            className="text-2xl font-semibold text-gray-900"
          >
            ${price.toFixed(2)}
          </Text>
          {oldPrice && (
            <Text
              Comp="span"
              size={24}
              weight="normal"
              color="gray4"
              className="text-2xl font-normal text-gray-400 line-through"
            >
              ${oldPrice.toFixed(2)}
            </Text>
          )}
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }, (_, index) => (
              <SvgInsert
                key={index}
                src={index < rating ? '/icons/star-18-filled.svg' : '/icons/star-18-empty.svg'}
                width={18}
                height={18}
              />
            ))}
          </div>
          <Text
            Comp="span"
            size={12}
            weight="normal"
            color="gray5"
            className="text-xs text-gray-400"
          >
            ({feedbackCount} Feedback)
          </Text>
        </div>
      </div>

      {/* Countdown */}
      <div className="w-full px-6 pb-6">
        <div className="w-full bg-gray-100 rounded-xl px-4 py-3 flex flex-col items-center gap-2">
          <Text
            Comp="p"
            size={14}
            weight="normal"
            color="gray4"
            className="text-xs text-gray-400 mb-1"
          >
            Hurry up! Offer ends In:
          </Text>
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <Text
                Comp="p"
                size={18}
                weight="medium"
                color="gray9"
                className="text-lg font-semibold text-gray-900"
              >
                {formatNumber(timeLeft.days)}
              </Text>
              <Text
                Comp="p"
                size={10}
                weight="medium"
                color="gray4"
                className="text-[10px] font-medium text-gray-400"
              >
                DAYS
              </Text>
            </div>
            <Text
              Comp="span"
              size={20}
              weight="normal"
              color="gray5"
              className="text-xl font-normal text-gray-400"
            >
              :
            </Text>
            <div className="flex flex-col items-center">
              <Text
                Comp="p"
                size={18}
                weight="medium"
                color="gray9"
                className="text-lg font-semibold text-gray-900"
              >
                {formatNumber(timeLeft.hours)}
              </Text>
              <Text
                Comp="p"
                size={10}
                weight="medium"
                color="gray4"
                className="text-[10px] font-medium text-gray-400"
              >
                HOURS
              </Text>
            </div>
            <Text
              Comp="span"
              size={20}
              weight="normal"
              color="gray5"
              className="text-xl font-normal text-gray-400"
            >
              :
            </Text>
            <div className="flex flex-col items-center">
              <Text
                Comp="p"
                size={18}
                weight="medium"
                color="gray9"
                className="text-lg font-semibold text-gray-900"
              >
                {formatNumber(timeLeft.minutes)}
              </Text>
              <Text
                Comp="p"
                size={10}
                weight="medium"
                color="gray4"
                className="text-[10px] font-medium text-gray-400"
              >
                MINS
              </Text>
            </div>
            <Text
              Comp="span"
              size={20}
              weight="normal"
              color="gray5"
              className="text-xl font-normal text-gray-400"
            >
              :
            </Text>
            <div className="flex flex-col items-center">
              <Text
                Comp="p"
                size={18}
                weight="medium"
                color="gray9"
                className="text-lg font-semibold text-gray-900"
              >
                {formatNumber(timeLeft.seconds)}
              </Text>
              <Text
                Comp="p"
                size={10}
                weight="medium"
                color="gray4"
                className="text-[10px] font-medium text-gray-400"
              >
                SECS
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductCard;
