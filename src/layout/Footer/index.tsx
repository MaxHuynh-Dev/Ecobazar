import { Container } from '@Components/Container';
import React from 'react';

import CTA from '@Templates/CTA';
import Copyright from './Copyright';
import Main from './Main';
import styles from './footer.module.scss';
function Footer(): React.JSX.Element {
  return (
    <React.Fragment>
      <CTA />
      <div className={styles.footer}>
        <Container>
          <Main />
          <Copyright />
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Footer;
