import { Container } from '@Components/Container';
import ImagePlaceHolder from '@Components/ImagePlaceHolder';
import Text from '@Components/Typo';
import { ROUTER } from '@Constants/router';
import Link from 'next/link';
import type React from 'react';

import s from './header.module.scss';

function Header(): React.ReactElement {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.header_container}>
          <Link href="/" className={s.header_logo}>
            <ImagePlaceHolder src="/images/logo.png" alt="Logo" width={148} height={63} />
          </Link>
          <ul className={s.header_menu}>
            {ROUTER.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <Text Comp={'span'} size={18} transform="uppercase">
                    {item.label}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
}

export default Header;
