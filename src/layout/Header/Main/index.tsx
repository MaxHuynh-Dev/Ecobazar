import { Container } from '@/components/Container';
import SvgInsert from '@/components/SvgInsert';
import { SLUG } from '@/constants/router';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { Separator } from 'radix-ui';
import type React from 'react';
import CartButton from './CartButton';
import styles from './main.module.scss';
import SearchBar from './SearchBar';

function Main(): React.ReactElement {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.main_container}>
          <Link href="/" className={styles.main_logo}>
            <SvgInsert name="logo" src="/images/logo/logo-dark.svg" />
          </Link>
          <SearchBar />
          <div className={styles.main_btn}>
            <Link href={SLUG.LIKED}>
              <Heart
                color="var(--color-gray-6)"
                strokeWidth={1.4}
                width={'3.2rem'}
                height={'3.2rem'}
              />
            </Link>
            <Separator.Root
              className={styles.main_btn_divider}
              color="var(--color-gray-2)"
              orientation="vertical"
            />
            <CartButton />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Main;
