import type React from 'react';

import { Container } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';

interface TestimonialProp {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  testimonial: string;
}

interface TestimonialCardProp {
  testimonial: TestimonialProp;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProp): React.JSX.Element => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6 gap-6 transition-all duration-200 hover:shadow-xl min-h-[290px]">
      <div className="mb-2">
        <SvgInsert src="/icons/quote.svg" width={32} height={26} />
      </div>
      <Text Comp="p" size={14} weight="normal" color="gray7" className="mb-4 text-gray-500">
        {testimonial.testimonial}
      </Text>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
            <ImagePlaceHolder
              src={testimonial.avatar}
              alt={testimonial.name}
              width={56}
              height={56}
            />
          </div>
          <div>
            <Text
              Comp="p"
              size={16}
              weight="medium"
              color="gray9"
              className="text-gray-900 font-medium"
            >
              {testimonial.name}
            </Text>
            <Text Comp="p" size={14} weight="normal" color="gray4" className="text-gray-400">
              {testimonial.role}
            </Text>
          </div>
        </div>
        <div className="flex items-center gap-[2px]">
          {Array.from({ length: 5 }).map((_, index: number) => (
            <SvgInsert
              key={index}
              src={
                index < testimonial.rating
                  ? '/icons/star-20-filled.svg'
                  : '/icons/star-20-empty.svg'
              }
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function Testimonials(): React.ReactElement {
  const testimonials: TestimonialProp[] = [
    {
      id: 1,
      name: 'Robert Fox',
      role: 'Customer',
      avatar: '/images/hotdeal/Image-10.jpg',
      rating: 5,
      testimonial:
        'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    },
    {
      id: 2,
      name: 'Dianne Russell',
      role: 'Customer',
      avatar: '/images/hotdeal/Image-10.jpg',
      rating: 5,
      testimonial:
        'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    },
    {
      id: 3,
      name: 'Eleanor Pena',
      role: 'Customer',
      avatar: '/images/hotdeal/Image-10.jpg',
      rating: 5,
      testimonial:
        'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    },
  ];

  return (
    <div className="py-[60px] bg-[#fafafa]">
      <Container>
        <div className="flex items-center justify-between mb-10 gap-4 flex-wrap">
          <Text Comp="h2" size={32} weight="semibold" color="gray9">
            Client Testimonials
          </Text>
          <div className="flex gap-2">
            <button
              className="flex items-center justify-center bg-gray-100 hover:bg-primary/10 rounded-full p-2 transition-all duration-150 border border-transparent hover:border-primary focus:outline-none"
              aria-label="Previous"
              style={{ transform: 'rotate(180deg)' }}
            >
              <SvgInsert src="/icons/chevron-right.svg" width={24} height={24} />
            </button>
            <button
              className="flex items-center justify-center bg-gray-100 hover:bg-primary/10 rounded-full p-2 transition-all duration-150 border border-transparent hover:border-primary focus:outline-none"
              aria-label="Next"
            >
              <SvgInsert src="/icons/chevron-right.svg" width={24} height={24} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial: TestimonialProp) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Testimonials;
