import Text from '@Components/Typo';
import Image from 'next/image';
import type React from 'react';
import styles from './main.module.scss';

function Main(): React.JSX.Element {
  return (
    <div className={styles.main}>
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
      <div className={styles.main_menu}></div>
    </div>
  );
}

export default Main;
