import { Container, GridContainer } from '@/components/Container';
import type React from 'react';
import styles from './cta.module.scss';

function CTA(): React.ReactElement {
  return (
    <div className={styles.cta}>
      <Container>
        <GridContainer>
          <div className={styles.cta_content}>
            <h1>CTA</h1>
          </div>
        </GridContainer>
      </Container>
    </div>
  );
}

export default CTA;
