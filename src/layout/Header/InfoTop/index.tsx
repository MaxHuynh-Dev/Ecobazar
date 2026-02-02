'use client';
import type React from 'react';

import { Container } from '@/components/Container';
import Text from '@/components/Typo';
import { SLUG } from '@Constants/router';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import DropdownTopHeader from '../components/DropdownTopHeader';
import styles from './infoTop.module.scss';

function InfoTop(): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleValueChange(value: string) {
    // TODO: Handle language/currency change
  }

  return (
    <div className={styles.infoTop}>
      <Container>
        <div className={styles.infoTop_container}>
          <div className={styles.infoTop_container_left}>
            <MapPin color="var(--color-gray-6)" strokeWidth={1.4} />
            <Text size={12} color="gray6">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </Text>
          </div>
          <div className={styles.infoTop_container_right}>
            <DropdownTopHeader
              defaultValue="EN"
              options={[
                { label: 'EN', value: 'EN' },
                { label: 'VN', value: 'VN' },
              ]}
              handleValueChange={handleValueChange}
            />
            <DropdownTopHeader
              defaultValue="USD"
              options={[
                { label: 'USD', value: 'USD' },
                { label: 'VND', value: 'VND' },
              ]}
              handleValueChange={handleValueChange}
            />
            <hr className={styles.infoTop_container_right_hr} />
            <div className={styles.infoTop_container_right_links}>
              <Link href={SLUG.LOGIN}>
                <Text size={12} color="gray6">
                  Login
                </Text>
              </Link>
              /
              <Link href={SLUG.REGISTER}>
                <Text size={12} color="gray6">
                  Register
                </Text>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default InfoTop;
