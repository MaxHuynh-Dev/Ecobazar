import type React from 'react';

import { Container } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';
import styles from './instagramFeed.module.scss';

function InstagramFeed(): React.ReactElement {
  const posts = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=400&auto=format&fit=crop',
      isHighlighted: false,
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=400&auto=format&fit=crop',
      isHighlighted: true,
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=400&auto=format&fit=crop',
      isHighlighted: false,
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=400&auto=format&fit=crop',
      isHighlighted: false,
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?q=80&w=400&auto=format&fit=crop',
      isHighlighted: false,
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=400&auto=format&fit=crop',
      isHighlighted: false,
    },
  ];

  return (
    <div className={styles.instagramFeed}>
      <Container>
        <Text
          Comp="h2"
          size={32}
          weight="semibold"
          color="gray9"
          className={styles.instagramFeed_title}
        >
          Follow us on Instagram
        </Text>
        <div className={styles.instagramFeed_grid}>
          {posts.map((post) => (
            <div
              key={post.id}
              className={`${styles.instagramFeed_post} ${
                post.isHighlighted ? styles.instagramFeed_post__highlighted : ''
              }`}
            >
              <ImagePlaceHolder
                src={post.image}
                alt={`Instagram post ${post.id.toString()}`}
                width={200}
                height={200}
              />
              {post.isHighlighted && (
                <div className={styles.instagramFeed_post_overlay}>
                  <SvgInsert src="/icons/instagram-large.svg" width={32} height={32} />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default InstagramFeed;
