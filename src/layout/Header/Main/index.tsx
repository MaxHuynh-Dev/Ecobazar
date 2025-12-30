import { Container } from '@/components/Container';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';
import { SLUG } from '@/constants/router';
import { Heart, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Separator } from 'radix-ui';
import type React from 'react';
import styles from './main.module.scss';

function Main(): React.ReactElement {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.main_container}>
          <Link href="/" className={styles.main_logo}>
            <SvgInsert name="logo" src="/images/Logo.svg" />
          </Link>
          <div className="">search</div>
          <div className={styles.main_btn}>
            <Link href={SLUG.LIKED}>
              <Heart color="var(--color-gray-6)" strokeWidth={1.4} width={32} height={32} />
            </Link>
            <Separator.Root
              className={styles.main_btn_divider}
              color="var(--color-gray-2)"
              orientation="vertical"
            />
            <div className={styles.main_cart}>
              <div className={styles.main_cart_icon}>
                <ShoppingCart
                  color="var(--color-gray-6)"
                  strokeWidth={1.4}
                  width={32}
                  height={32}
                />
                <div className={styles.main_cart_count}>
                  <Text size={10} color="white" weight="medium">
                    2
                  </Text>
                </div>
              </div>
              <div className={styles.main_cart_icon_text}>
                <Text size={11} color="gray7">
                  Shopping cart:
                </Text>
                <Text size={14} weight="medium" color="gray9" style={{ lineHeight: '1em' }}>
                  $100.00
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Main;
