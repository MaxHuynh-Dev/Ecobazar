'use client';

import PrimaryButton from '@Components/Buttons/PrimaryButton';
import { Container } from '@Components/Container';
import classNames from 'classnames';
import type React from 'react';

import Text from '@/components/Typo';
import styles from './hero.module.scss';

function Hero(): React.ReactElement {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_background}>
        <video autoPlay muted loop playsInline>
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
      </div>
      <Container className={styles.hero_container}>
        <div className={styles.hero_container_inner}>
          <Text
            Comp={'h1'}
            size={130}
            weight="semibold"
            transform="uppercase"
            className={classNames(styles.hero_heading)}
          >
            <span className={classNames(styles.hero_heading_word_italic, 'split')}>We create</span>
            <div className={classNames(styles.hero_heading_word_normal, 'split')}>
              interiors that one
            </div>
            <div className={classNames(styles.hero_heading_word_normal, 'split')}>
              wants to live in
            </div>
          </Text>
          <div className={styles.hero_container_inner_bottom}>
            <Text Comp={'p'} size={18}>
              For more than 30 years, we&apos;ve been <br /> bringing projects to life around the
              world.
            </Text>
            <PrimaryButton text="Explore our work" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
