import type React from 'react';

import { Container } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';

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
    <div className="rounded-lg overflow-hidden bg-white shadow-md flex flex-col">
      <div className="relative">
        <div className="aspect-[424/324] w-full">
          <ImagePlaceHolder
            src={blog.image}
            alt={blog.title}
            width={424}
            height={324}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-4 left-4 flex flex-col items-center bg-white rounded-lg shadow px-3 py-2">
          <Text Comp="p" size={20} weight="medium" color="gray9">
            {blog.date}
          </Text>
          <Text
            Comp="p"
            size={12}
            weight="medium"
            color="gray5"
            className="uppercase tracking-wider"
          >
            {blog.month}
          </Text>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex flex-wrap items-center gap-5 mb-5">
          <div className="flex items-center gap-2">
            <SvgInsert src="/icons/tag.svg" width={18} height={18} />
            <Text Comp="span" size={14} weight="normal" color="gray7">
              {blog.category}
            </Text>
          </div>
          <div className="flex items-center gap-2">
            <SvgInsert src="/icons/user.svg" width={18} height={18} />
            <Text Comp="span" size={14} weight="normal" color="gray7">
              <Text Comp="span" size={14} weight="normal" color="gray5">
                By
              </Text>{' '}
              {blog.author}
            </Text>
          </div>
          <div className="flex items-center gap-2">
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
          className="mb-6 hover:underline cursor-pointer transition-colors"
        >
          {blog.title}
        </Text>
        <button className="group flex items-center gap-2 mt-auto text-primary font-semibold">
          <Text Comp="span" size={16} weight="semibold" color="primary">
            Read More
          </Text>
          <SvgInsert
            src="/icons/arrow-right-green.svg"
            width={15}
            height={13}
            className="group-hover:translate-x-1 transition-transform"
          />
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
      image: '/images/hotdeal/Image-10.jpg',
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
      image: '/images/hotdeal/Image-10.jpg',
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
      image: '/images/hotdeal/Image-10.jpg',
      slug: 'maecenas-blandit',
    },
  ];

  return (
    <div className="py-[60px] bg-gray-50">
      <Container>
        <Text Comp="h2" size={32} weight="semibold" color="gray9" className="text-center mb-10">
          Latest News
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: BlogCardProp) => (
            <BlogCardItem key={blog.id} blog={blog} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default LatestNews;
