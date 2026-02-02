import Text from '@/components/Typo';
import { X } from 'lucide-react';
import Image from 'next/image';
import type React from 'react';
import styles from './cartItem.module.scss';

function CartItem(): React.ReactElement {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem_imageContainer}>
        <div className={styles.cartItem_image}>
          <Image src="/images/orange.jpg" alt="Product" width={120} height={100} />
        </div>
        <div className={styles.cartItem_info}>
          <Text size={14} color="gray9">
            Fresh Indian Orange
          </Text>
          <Text size={14} color="gray9">
            1 kg x{' '}
            <Text Comp="span" weight="medium">
              $10.00
            </Text>
          </Text>
        </div>
        <div className={styles.cartItem_remove}>
          <X />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
