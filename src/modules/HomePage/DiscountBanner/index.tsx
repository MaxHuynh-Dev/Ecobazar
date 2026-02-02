import type React from 'react';

import { Container } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';
import styles from './discountBanner.module.scss';

function DiscountBanner(): React.ReactElement {
  return (
    <div className={styles.discountBanner}>
      <Container>
        <div className={styles.discountBanner_wrapper}>
          <div className={styles.discountBanner_bg}>
            <ImagePlaceHolder
              src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1600&auto=format&fit=crop"
              alt="Summer Sale"
              width={1320}
              height={358}
            />
          </div>
          <div className={styles.discountBanner_content}>
            <div className={styles.discountBanner_content_header}>
              <Text
                Comp="p"
                size={16}
                weight="medium"
                color="white"
                className={styles.discountBanner_content_subtitle}
              >
                SUMMER SALE
              </Text>
              <div className={styles.discountBanner_content_title}>
                <Text
                  Comp="span"
                  size={56}
                  weight="semibold"
                  className={styles.discountBanner_content_title_discount}
                >
                  37%
                </Text>
                <Text Comp="span" size={56} weight="normal" color="white">
                  {' '}
                  OFF
                </Text>
              </div>
            </div>
            <Text
              Comp="p"
              size={16}
              weight="normal"
              color="white"
              className={styles.discountBanner_content_description}
            >
              Free on all your order, Free Shipping and 30 days money-back guarantee
            </Text>
            <button className={styles.discountBanner_content_btn}>
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
