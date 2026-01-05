import type React from 'react';

import { Container, GridContainer } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import Text from '@/components/Typo';
import classNames from 'classnames';
import styles from './hero.module.scss';

function Hero(): React.ReactElement {
  return (
    <div className={styles.hero}>
      <Container>
        <GridContainer className={styles.hero_grid}>
          <div className={styles.hero_mainContent}>
            <div className={styles.hero_mainContent_image}>
              <ImagePlaceHolder
                src={
                  'https://images.unsplash.com/photo-1726241966334-6e9f1de905d6?q=80&w=3197&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt="Hero Main"
                width={872}
                height={600}
              />
            </div>
            <div className={styles.hero_mainContent_content}>
              <Text Comp="h1" size={48} weight="semibold" transform="capitalize" color="white">
                Fresh & Healthy <br /> Organic Food
              </Text>
            </div>
          </div>
          <div className={styles.hero_secondaryContent}>
            <div className={classNames(styles.hero_smallImage)}>
              <ImagePlaceHolder
                src={
                  'https://images.unsplash.com/photo-1726241966334-6e9f1de905d6?q=80&w=3197&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt="Hero Secondary"
                width={423}
                height={288}
              />
            </div>
          </div>
          <div className={styles.hero_tertiaryContent}>
            <div className={classNames(styles.hero_smallImage)}>
              <ImagePlaceHolder
                src={
                  'https://images.unsplash.com/photo-1726241966334-6e9f1de905d6?q=80&w=3197&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt="Hero Secondary"
                width={423}
                height={288}
              />
            </div>
          </div>
        </GridContainer>
      </Container>
    </div>
  );
}

export default Hero;
