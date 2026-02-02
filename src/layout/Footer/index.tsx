import { Container, GridContainer } from '@Components/Container';
import type React from 'react';

import styles from './footer.module.scss';
function Footer(): React.JSX.Element {
  return (
    <div className={styles.footer}>
      <Container>
        <GridContainer></GridContainer>
      </Container>
    </div>
  );
}

export default Footer;
