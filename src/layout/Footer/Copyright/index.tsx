import Text from '@Components/Typo';
import type React from 'react';

import Image from 'next/image';
import styles from './copyright.module.scss';
function Copyright(): React.JSX.Element {
  return (
    <div className={styles.copyright}>
      <Text size={14} color="gray5">
        Ecobazar eCommerce © {new Date().getFullYear()} All Rights Reserved
      </Text>
      <div className={styles.paymentMethods}>
        <div className={styles.paymentMethods_item}>
          <Image src="/images/payment/Visa.png" alt="Visa" width={100} height={100} />
        </div>
        <div className={styles.paymentMethods_item}>
          <Image src="/images/payment/Mastercard.png" alt="Mastercard" width={100} height={100} />
        </div>
        <div className={styles.paymentMethods_item}>
          <Image src="/images/payment/Cart.png" alt="Cart" width={100} height={100} />
        </div>
        <div className={styles.paymentMethods_item}>
          <Image src="/images/payment/Discover.png" alt="Paypal" width={100} height={100} />
        </div>
        <div className={styles.paymentMethods_item}>
          <Image src="/images/payment/ApplePay.png" alt="ApplePay" width={100} height={100} />
        </div>
      </div>
    </div>
  );
}

export default Copyright;
