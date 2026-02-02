import { Container } from '@Components/Container';
import type React from 'react';

import Copyright from './Copyright';
import Main from './Main';
import styles from './footer.module.scss';
function Footer(): React.JSX.Element {
  return (
    <div className={styles.footer}>
      <Container>
        <Main />
        <Copyright />
      </Container>
    </div>
  );
}

export default Footer;
