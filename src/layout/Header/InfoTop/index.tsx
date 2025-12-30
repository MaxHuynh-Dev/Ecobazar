import type React from 'react';

import { Container } from '@/components/Container';
import Text from '@/components/Typo';
import { SLUG } from '@Constants/router';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import styles from './infoTop.module.scss';

function InfoTop(): React.ReactElement {
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
            Eng
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
