import type React from 'react';

import { Container } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';

function DiscountBanner(): React.ReactElement {
  return (
    <div className="py-[60px]">
      <Container>
        <div className="relative flex items-center h-[358px] rounded-[10px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ImagePlaceHolder
              src="/images/hotdeal/Image-10.jpg"
              alt="Summer Sale"
              width={1320}
              height={358}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 ml-auto flex flex-col gap-4 max-w-[500px] pr-[60px]">
            <div className="flex flex-col gap-3">
              <Text
                Comp="p"
                size={16}
                weight="medium"
                color="white"
                className="uppercase tracking-[2px] leading-none"
              >
                SUMMER SALE
              </Text>
              <div className="leading-[1.2] flex items-baseline">
                <Text Comp="span" size={56} weight="semibold" className="text-warning">
                  37%
                </Text>
                <Text Comp="span" size={56} weight="normal" color="white" className="ml-1">
                  OFF
                </Text>
              </div>
            </div>
            <Text
              Comp="p"
              size={16}
              weight="normal"
              color="white"
              className="opacity-70 max-w-[441px] whitespace-pre-wrap"
            >
              Free on all your order, Free Shipping and 30 days money-back guarantee
            </Text>
            <button className="flex items-center gap-2 bg-primary border-none rounded-[43px] py-[12px] px-[32px] transition hover:bg-primary/90 group w-fit mt-2">
              <Text Comp="span" size={16} weight="semibold" color="white">
                Shop Now
              </Text>
              <SvgInsert src="/icons/arrow-right-green.svg" width={15} height={13} />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DiscountBanner;
