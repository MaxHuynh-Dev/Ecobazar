'use client';

import { Container } from '@Components/Container';
import SvgInsert from '@Components/SvgInsert';
import type { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import type React from 'react';

import Text from '@/components/Typo';
import styles from './projects.module.scss';
import Slide from './Slide';
import { usePrevNextButtons } from './usePrevNextButtons';

function Projects(): React.ReactElement {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    // loop: true,
  });
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <div className={styles.projects}>
      <Container>
        <div className={styles.projects_header}>
          <Text Comp={'h2'} weight="semibold" transform="uppercase" size={130} font="heading">
            projects
          </Text>
          <div className={styles.projects_header_number}>
            <Text
              Comp={'span'}
              size={60}
              weight="semibold"
              transform="uppercase"
              className={styles.projects_header_number_label}
            >
              1/6
            </Text>
            <div className={styles.projects_arrows}>
              <button
                type="button"
                className={styles.projects_arrow}
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              >
                <SvgInsert src="/icons/arrow-left.svg" width={49} height={49} />
              </button>

              <button
                type="button"
                className={styles.projects_arrow}
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              >
                <SvgInsert src="/icons/arrow-right.svg" width={49} height={49} />
              </button>
            </div>
          </div>
        </div>
      </Container>
      <Slide emblaRef={emblaRef as unknown as EmblaCarouselType} />
    </div>
  );
}

export default Projects;
