import { Container } from '@/components/Container';
import Text from '@Components/Typo';
import { ROUTER } from '@Constants/router';
import { PhoneCall } from 'lucide-react';
import Link from 'next/link';
import type React from 'react';
import styles from './menu.module.scss';

function Menu(): React.ReactElement {
  return (
    <div className={styles.menu}>
      <Container className={styles.menu_container}>
        <ul className={styles.menu_list}>
          {ROUTER.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <Text size={14} transform="capitalize" weight="medium" color="gray4">
                  {item.label}
                </Text>
              </Link>
            </li>
          ))}
        </ul>

        <Link href="tel:+1234567890" className={styles.menu_phone}>
          <PhoneCall color="var(--color-white)" />
          <Text size={14} weight="medium" color="white">
            (219) 555-0114
          </Text>
        </Link>
      </Container>
    </div>
  );
}

export default Menu;
