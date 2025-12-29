import ImagePlaceHolder from '@Components/ImagePlaceHolder';
import Text from '@Components/Typo';
import cn from 'classnames';
import type React from 'react';

import styles from './itemOffer.module.scss';

interface TItemOffer {
  title: string;
  image: string;
  number: number;
  className?: string;
}

function ItemOffer({ title, image, number, className }: TItemOffer): React.ReactElement {
  return (
    <div className={cn(styles.itemOffer, className)}>
      <div className={styles.itemOffer_header}>
        <Text Comp={'span'} size={60} weight="semibold">
          {title}
        </Text>
        <Text
          Comp={'span'}
          size={22}
          transform="uppercase"
          weight="semibold"
          className={styles.itemOffer_number}
        >
          {number}
        </Text>
      </div>
      <div className={styles.itemOffer_image}>
        <ImagePlaceHolder src={image} alt="Offer" width={1000} height={1000} />
      </div>
    </div>
  );
}

export default ItemOffer;
