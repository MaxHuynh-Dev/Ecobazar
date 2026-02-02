import type React from 'react';

import { Container } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';
import styles from './latestNews.module.scss';

interface BlogCardProp {
  id: number;
  title: string;
  date: string;
  month: string;
  category: string;
  author: string;
  commentsCount: number;
  image: string;
  slug: string;
}

interface BlogCardItemProp {
  blog: BlogCardProp;
}

const BlogCardItem = ({ blog }: BlogCardItemProp): React.JSX.Element => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.blogCard_imageWrapper}>
        <div className={styles.blogCard_image}>
          <ImagePlaceHolder src={blog.image} alt={blog.title} width={424} height={324} />
        </div>
        <div className={styles.blogCard_date}>
          <Text Comp="p" size={20} weight="medium" color="gray9">
            {blog.date}
          </Text>
          <Text
            Comp="p"
            size={12}
            weight="medium"
            color="gray5"
            className={styles.blogCard_date_month}
          >
            {blog.month}
          </Text>
        </div>
      </div>
      <div className={styles.blogCard_content}>
        <div className={styles.blogCard_meta}>
          <div className={styles.blogCard_meta_item}>
            <SvgInsert src="/icons/tag.svg" width={18} height={18} />
            <Text Comp="span" size={14} weight="normal" color="gray7">
              {blog.category}
            </Text>
          </div>
          <div className={styles.blogCard_meta_item}>
            <SvgInsert src="/icons/user.svg" width={18} height={18} />
            <Text Comp="span" size={14} weight="normal" color="gray7">
              <Text Comp="span" size={14} weight="normal" color="gray5">
                By
              </Text>{' '}
              {blog.author}
            </Text>
          </div>
          <div className={styles.blogCard_meta_item}>
            <SvgInsert src="/icons/comment.svg" width={18} height={18} />
            <Text Comp="span" size={14} weight="normal" color="gray6">
              {blog.commentsCount} Comments
            </Text>
          </div>
        </div>
        <Text
          Comp="p"
          size={18}
          weight="medium"
          color="hardPrimary"
          className={styles.blogCard_title}
        >
          {blog.title}
        </Text>
        <button className={styles.blogCard_readMore}>
          <Text Comp="span" size={16} weight="semibold" color="primary">
            Read More
          </Text>
          <SvgInsert src="/icons/arrow-right-green.svg" width={15} height={13} />
        </button>
      </div>
    </div>
  );
};

function LatestNews(): React.ReactElement {
  const blogs: BlogCardProp[] = [
    {
      id: 1,
      title: 'Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.',
      date: '18',
      month: 'NOV',
      category: 'Food',
      author: 'Admin',
      commentsCount: 65,
      image:
        'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=800&auto=format&fit=crop',
      slug: 'curabitur-porttitor',
    },
    {
      id: 2,
      title: 'Eget lobortis lorem lacinia. Vivamus pharetra semper,',
      date: '29',
      month: 'JAN',
      category: 'Food',
      author: 'Admin',
      commentsCount: 65,
      image:
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop',
      slug: 'eget-lobortis',
    },
    {
      id: 3,
      title: 'Maecenas blandit risus elementum mauris malesuada.',
      date: '21',
      month: 'FEB',
      category: 'Food',
      author: 'Admin',
      commentsCount: 65,
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
      slug: 'maecenas-blandit',
    },
  ];

  return (
    <div className={styles.latestNews}>
      <Container>
        <Text
          Comp="h2"
          size={32}
          weight="semibold"
          color="gray9"
          className={styles.latestNews_title}
        >
          Latest News
        </Text>
        <div className={styles.latestNews_grid}>
          {blogs.map((blog: BlogCardProp) => (
            <BlogCardItem key={blog.id} blog={blog} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default LatestNews;
