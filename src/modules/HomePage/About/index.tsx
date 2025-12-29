import { Container, GridContainer } from '@Components/Container';
import ImagePlaceHolder from '@Components/ImagePlaceHolder';
import type React from 'react';

import Text from '@/components/Typo';
import styles from './about.module.scss';

function About(): React.ReactElement {
  return (
    <div className={styles.about}>
      <Container className={styles.about_container}>
        <GridContainer className={styles.about_grid}>
          <div className={styles.about_left}>
            <Text Comp={'h2'} weight="semibold" transform="uppercase" size={130} font="heading">
              About
            </Text>
            <div className={styles.about_left_image}>
              <ImagePlaceHolder src="/images/about.jpg" alt="About" width={1000} height={1000} />
            </div>
          </div>
          <div className={styles.about_right}>
            <Text Comp={'p'} size={18} className={styles.about_right_paragraph}>
              We have created an architectural and design bureau, distinguished by an innovative
              creative approach in the field of design and the highest level of ethics in the field
              of business, based on honest and open relationships, we reach an understanding with
              the client and partners. We brought together highly qualified professionals dedicated
              to their work, motivated to succeed in all areas related to the objects of
              architecture and design.
              <br />
              <br />
              <br />
              High standards of quality, creativity of ideas, absolute mastery of the regulatory
              framework, responsibility for the executed projects - all this enables the client to
              trust us. We are focused on satisfying the client&apos;s design needs, integrating
              them into the creative process of architectural design, interior design and other
              sections of the project. We are expanding the range of activities of our architectural
              company, to achieve a balance in the system of &quot;ideas and implementation.&quot;
              Our team consists of architects, designers and engineers from different areas.
            </Text>
            <div className={styles.about_right_items}>
              <div className={styles.about_right_items_item}>
                <Text Comp={'span'} size={60} weight="semibold">
                  286
                </Text>
                <Text Comp={'label'} size={20} transform="uppercase" weight="normal">
                  Unique Projects Finished
                </Text>
              </div>
              <div className={styles.about_right_items_item}>
                <Text Comp={'span'} size={60} weight="semibold">
                  139
                </Text>

                <Text Comp={'label'} size={20} transform="uppercase" weight="normal">
                  Projects in Progress
                </Text>
              </div>
              <div className={styles.about_right_items_item}>
                <Text Comp={'span'} size={60} weight="semibold">
                  16
                </Text>
                <Text Comp={'label'} size={20} transform="uppercase" weight="normal">
                  Achievements
                </Text>
              </div>
              <div className={styles.about_right_items_item}>
                <Text Comp={'span'} size={60} weight="semibold">
                  13
                </Text>
                <Text Comp={'label'} size={20} transform="uppercase" weight="normal">
                  Countries that We Operate In
                </Text>
              </div>
            </div>
          </div>
        </GridContainer>
      </Container>
    </div>
  );
}

export default About;
