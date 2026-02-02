import type React from 'react';

import { Container } from '@/components/Container';
import SvgInsert from '@/components/SvgInsert';
import styles from './featured.module.scss';

interface FeatureItemProp {
  iconSrc: string;
  title: string;
  description: string;
}

const FeatureItem = ({ iconSrc, title, description }: FeatureItemProp): React.JSX.Element => {
  return (
    <div className={styles.featureItem}>
      <div className={styles.featureItem_icon}>
        <SvgInsert src={iconSrc} width={40} height={40} />
      </div>
      <div className={styles.featureItem_info}>
        <p className={styles.featureItem_info_title}>{title}</p>
        <p className={styles.featureItem_info_description}>{description}</p>
      </div>
    </div>
  );
};

function Featured(): React.ReactElement {
  const features: FeatureItemProp[] = [
    {
      iconSrc: '/icons/delivery-truck.svg',
      title: 'Free Shipping',
      description: 'Free shipping on all your order',
    },
    {
      iconSrc: '/icons/headphones.svg',
      title: 'Customer Support 24/7',
      description: 'Instant access to Support',
    },
    {
      iconSrc: '/icons/shopping-bag.svg',
      title: '100% Secure Payment',
      description: 'We ensure your money is save',
    },
    {
      iconSrc: '/icons/package.svg',
      title: 'Money-Back Guarantee',
      description: '30 Days Money-Back Guarantee',
    },
  ];

  return (
    <div className={styles.featured}>
      <Container>
        <div className={styles.featured_wrapper}>
          {features.map((feature: FeatureItemProp, index: number) => (
            <FeatureItem
              key={index}
              iconSrc={feature.iconSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Featured;
