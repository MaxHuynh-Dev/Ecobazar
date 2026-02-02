'use client';

import { Container } from '@/components/Container';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';
import type React from 'react';
import { useState } from 'react';
import styles from './cta.module.scss';

function CTA(): React.ReactElement {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // TODO: Handle email subscription
  };

  return (
    <div className={styles.cta}>
      <Container>
        <div className={styles.cta_wrapper}>
          <div className={styles.cta_content}>
            <Text Comp="h2" size={24} weight="semibold" color="gray9">
              Subcribe our Newsletter
            </Text>
            <Text
              Comp="p"
              size={14}
              weight="normal"
              color="gray4"
              className={styles.cta_content_description}
            >
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet
              elit eu magna.
            </Text>
          </div>
          <form className={styles.cta_form} onSubmit={handleSubmit}>
            <div className={styles.cta_form_inputWrapper}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                }}
                className={styles.cta_form_input}
                required
              />
              <button type="submit" className={styles.cta_form_button}>
                Subscribe
              </button>
            </div>
          </form>
          <div className={styles.cta_social}>
            <a
              href="https://www.facebook.com"
              className={styles.cta_social_link}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SvgInsert src="/icons/facebook.svg" width={18} height={18} />
            </a>
            <a
              href="https://www.twitter.com"
              className={styles.cta_social_link}
              aria-label="Twitter"
            >
              <SvgInsert src="/icons/twitter.svg" width={18} height={15} />
            </a>
            <a
              href="https://www.pinterest.com"
              className={styles.cta_social_link}
              aria-label="Pinterest"
            >
              <SvgInsert src="/icons/pinterest.svg" width={15} height={18} />
            </a>
            <a
              href="https://www.instagram.com"
              className={styles.cta_social_link}
              aria-label="Instagram"
            >
              <SvgInsert src="/icons/instagram.svg" width={18} height={18} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CTA;
