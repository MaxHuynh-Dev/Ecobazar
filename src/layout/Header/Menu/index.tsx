import { Container } from '@/components/Container';
import Text from '@Components/Typo';
import { ROUTER } from '@Constants/router';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';
import type React from 'react';
import styles from './menu.module.scss';

interface MenuProps {
  variant?: 'dark' | 'light';
}

function Menu({ variant = 'dark' }: MenuProps): React.ReactElement {
  return (
    <div className={styles.menu} data-variant={variant}>
      <Container className={styles.menu_container}>
        <ul className={styles.menu_list}>
          {ROUTER.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <Text
                  size={14}
                  transform="capitalize"
                  weight="medium"
                  color="gray4"
                  className={styles.menu_list_item}
                >
                  {item.label}
                </Text>
              </Link>
            </li>
          ))}
        </ul>

        <Link href="tel:+1234567890" className={styles.menu_phone}>
          <PhoneCall color={variant === 'dark' ? 'var(--color-white)' : 'var(--color-gray-9)'} />
          <Text size={14} weight="medium" color={variant === 'dark' ? 'white' : 'gray9'}>
            (219) 555-0114
          </Text>
        </Link>
      </Container>
    </div>
  );
}

export default Menu;
