import type React from 'react';

import SecondaryButton from '@/components/Buttons/SecondaryButton';
import { Container } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import Text from '@/components/Typo';

function Hero(): React.ReactElement {
  return (
    <div className="mt-6">
      <Container>
        <div
          className="
            grid
            grid-cols-1
            gap-4
            md:grid-cols-12
            md:gap-5
            lg:gap-6
          "
        >
          {/* Main Content */}
          <div className="relative col-span-1 md:col-span-8 md:row-span-2">
            {/* Main Image */}
            <div className="w-full h-[375px] md:h-[600px] rounded-[10px] overflow-hidden aspect-[872/600]">
              <ImagePlaceHolder
                src={
                  'https://images.unsplash.com/photo-1726241966334-6e9f1de905d6?q=80&w=3197&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt="Hero Main"
                width={872}
                height={600}
              />
            </div>
            {/* Main Content Inner */}
            <div
              className="
              absolute
              top-1/2
              left-[16px]
              md:left-[60px]
              -translate-y-1/2
              flex flex-col items-start justify-start gap-7
            "
            >
              <Text Comp="h1" size={48} weight="semibold" transform="capitalize" color="white">
                Fresh & Healthy <br /> Organic Food
              </Text>
              <div className="border-l-4 border-softPrimary pl-3 flex flex-col gap-2">
                <Text Comp="p" size={20} weight="semibold" transform="capitalize" color="white">
                  Sale up to{' '}
                  <span className="bg-warning inline-block px-3 py-1 rounded">30% OFF</span>
                </Text>
                <Text
                  Comp="p"
                  size={14}
                  weight="normal"
                  transform="capitalize"
                  color="white"
                  style={{ opacity: 0.8 }}
                >
                  Free shipping on all your order.
                </Text>
              </div>
              <SecondaryButton text="Shop Now" size="large" />
            </div>
          </div>
          {/* Secondary Content */}
          <div className="relative col-span-1 md:col-span-4 md:row-span-1">
            <div className="w-full h-[180px] md:h-full rounded-[10px] overflow-hidden aspect-[423/288]">
              <ImagePlaceHolder
                src={
                  'https://images.unsplash.com/photo-1726241966334-6e9f1de905d6?q=80&w=3197&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt="Hero Secondary"
                width={423}
                height={288}
              />
            </div>
          </div>
          {/* Tertiary Content */}
          <div className="relative col-span-1 md:col-span-4 md:row-span-1">
            <div className="w-full h-[180px] md:h-full rounded-[10px] overflow-hidden aspect-[423/288]">
              <ImagePlaceHolder
                src={
                  'https://images.unsplash.com/photo-1726241966334-6e9f1de905d6?q=80&w=3197&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt="Hero Secondary"
                width={423}
                height={288}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
