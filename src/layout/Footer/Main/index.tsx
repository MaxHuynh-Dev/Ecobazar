'use client';

import { GridContainer } from '@/components/Container';
import { FOOTER_ROUTER } from '@/constants/router';
import Text from '@Components/Typo';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type React from 'react';
import styles from './main.module.scss';

export default function Main(): React.JSX.Element {
  const pathname = usePathname();
  return (
    <GridContainer className={styles.main}>
      <div className={styles.main_left}>
        <div className={styles.main_left_logo}>
          <Image src="/images/logo/logo-white.svg" alt="logo" width={300} height={300} />
        </div>
        <Text size={14} color="gray5" className={styles.main_left_description}>
          Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum
          magna congue nec.
        </Text>
        <div className={styles.main_left_info_container}>
          <a href="tel:+1234567890" className={styles.main_left_info}>
            <Text size={14} color="white" weight="medium" Comp="span">
              (219) 555-0114
            </Text>
          </a>
          <Text size={16} color="gray5" Comp="span" className={styles.main_left_info_text}>
            or
          </Text>
          <a href="mailto:Proxy@gmail.com" className={styles.main_left_info}>
            <Text size={14} color="white" weight="medium" Comp="span">
              Proxy@gmail.com
            </Text>
          </a>
        </div>
      </div>
      {FOOTER_ROUTER.map((item) => (
        <div className={styles.main_menu} key={item.label}>
          <Text size={16} color="white" weight="medium" Comp="span">
            {item.label}
          </Text>
          <ul className={styles.main_menu_list}>
            {item.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <Text size={14} color={pathname === link.href ? 'white' : 'gray4'} Comp="span">
                    {link.label}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </GridContainer>
  );
}
