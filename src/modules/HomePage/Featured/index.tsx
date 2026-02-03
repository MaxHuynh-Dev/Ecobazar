import type React from 'react';

import { Container } from '@/components/Container';
import SvgInsert from '@/components/SvgInsert';

interface FeatureItemProp {
  iconSrc: string;
  title: string;
  description: string;
}

const FeatureItem = ({ iconSrc, title, description }: FeatureItemProp): React.JSX.Element => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 flex-shrink-0">
        <SvgInsert src={iconSrc} width={40} height={40} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-poppins font-semibold text-[16px] leading-[1.2] text-gray-900 whitespace-pre-wrap">
          {title}
        </p>
        <p className="font-poppins text-[14px] text-gray-500 leading-normal whitespace-pre-wrap">
          {description}
        </p>
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
    <div className="py-[60px]">
      <Container>
        <div className="bg-white rounded-[8px] shadow-[0px_8px_40px_0px_rgba(0,38,3,0.08)] flex items-center justify-between py-10 px-10 gap-6">
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
