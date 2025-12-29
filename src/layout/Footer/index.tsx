import { Container, GridContainer } from '@Components/Container';
import type React from 'react';

import Text from '@/components/Typo';
import styles from './footer.module.scss';
import Form from './Form';
function Footer(): React.JSX.Element {
  return (
    <div className={styles.footer}>
      <Container>
        <GridContainer>
          <div className={styles.footer_left}>
            <div className={styles.footer_left_top}>
              <Text Comp={'h2'} weight="semibold" transform="uppercase" size={130} font="heading">
                CONTACTS
              </Text>
              <div className={styles.footer_left_top_paragraph}>
                <Text Comp={'p'} size={20} transform="uppercase" weight="normal" color="vani">
                  We are ready to share with you our design vision and lead you into the exciting
                  world of creativity.
                </Text>
              </div>
            </div>
            <div className={styles.footer_left_bottom}>
              <div className={styles.footer_left_bottom_item}>
                <Text Comp={'label'} size={20} transform="uppercase" weight="semibold" color="vani">
                  Address
                </Text>
                <Text Comp={'p'} size={18} transform="uppercase" weight="normal" color="vani">
                  Address: 123 Main St, Anytown, USA
                </Text>
              </div>
              <div className={styles.footer_left_bottom_item}>
                <Text Comp={'label'} size={20} transform="uppercase" weight="semibold" color="vani">
                  email
                </Text>
                <Text Comp={'p'} size={18} transform="uppercase" weight="normal" color="vani">
                  <a href="mailto:brilini.mail.asb@gmail.com">brilini.mail.asb@gmail.com</a>
                </Text>
              </div>
              <div className={styles.footer_left_bottom_item}>
                <Text Comp={'label'} size={20} transform="uppercase" weight="semibold" color="vani">
                  phone
                </Text>
                <Text Comp={'p'} size={18} transform="uppercase" weight="normal" color="vani">
                  <a href="tel:+380683650360">+38 068 365 03 60</a>
                  <a href="tel:+380662304412">+38 066 230 44 12</a>
                </Text>
              </div>
            </div>
          </div>
          <div className={styles.footer_right}>
            <div className={styles.footer_right_inner}>
              <Text Comp={'h2'} weight="semibold" transform="uppercase" size={60} font="heading">
                Let’s talk about your project!
              </Text>
              <Form />
            </div>
          </div>
        </GridContainer>
      </Container>
    </div>
  );
}

export default Footer;
