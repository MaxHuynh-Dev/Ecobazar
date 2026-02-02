import type React from 'react';

import { Container } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';
import styles from './testimonials.module.scss';

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
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialCard_quote}>
        <SvgInsert src="/icons/quote.svg" width={32} height={26} />
      </div>
      <Text
        Comp="p"
        size={14}
        weight="normal"
        color="gray7"
        className={styles.testimonialCard_text}
      >
        {testimonial.testimonial}
      </Text>
      <div className={styles.testimonialCard_footer}>
        <div className={styles.testimonialCard_reviewer}>
          <div className={styles.testimonialCard_reviewer_avatar}>
            <ImagePlaceHolder
              src={testimonial.avatar}
              alt={testimonial.name}
              width={56}
              height={56}
            />
          </div>
          <div className={styles.testimonialCard_reviewer_info}>
            <Text Comp="p" size={16} weight="medium" color="gray9">
              {testimonial.name}
            </Text>
            <Text Comp="p" size={14} weight="normal" color="gray4">
              {testimonial.role}
            </Text>
          </div>
        </div>
        <div className={styles.testimonialCard_rating}>
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
      avatar:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      testimonial:
        'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    },
    {
      id: 2,
      name: 'Dianne Russell',
      role: 'Customer',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      testimonial:
        'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    },
    {
      id: 3,
      name: 'Eleanor Pena',
      role: 'Customer',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      testimonial:
        'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    },
  ];

  return (
    <div className={styles.testimonials}>
      <Container>
        <div className={styles.testimonials_header}>
          <Text Comp="h2" size={32} weight="semibold" color="gray9">
            Client Testimonials
          </Text>
          <div className={styles.testimonials_header_arrows}>
            <button
              className={styles.testimonials_header_arrows_btn}
              aria-label="Previous"
              style={{ transform: 'rotate(180deg)' }}
            >
              <SvgInsert src="/icons/chevron-right.svg" width={24} height={24} />
            </button>
            <button className={styles.testimonials_header_arrows_btn} aria-label="Next">
              <SvgInsert src="/icons/chevron-right.svg" width={24} height={24} />
            </button>
          </div>
        </div>
        <div className={styles.testimonials_grid}>
          {testimonials.map((testimonial: TestimonialProp) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Testimonials;
