import type React from 'react';

import { Container } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import SvgInsert from '@/components/SvgInsert';
import Text from '@/components/Typo';

function InstagramFeed(): React.ReactElement {
  const posts = [
    {
      id: 1,
      image: '/images/hotdeal/Image-10.jpg',
      isHighlighted: false,
    },
    {
      id: 2,
      image: '/images/hotdeal/Image-10.jpg',
      isHighlighted: true,
    },
    {
      id: 3,
      image: '/images/hotdeal/Image-10.jpg',
      isHighlighted: false,
    },
    {
      id: 4,
      image: '/images/hotdeal/Image-10.jpg',
      isHighlighted: false,
    },
    {
      id: 5,
      image: '/images/hotdeal/Image-10.jpg',
      isHighlighted: false,
    },
    {
      id: 6,
      image: '/images/hotdeal/Image-10.jpg',
      isHighlighted: false,
    },
  ];

  return (
    <div className="py-[60px]">
      <Container>
        <Text Comp="h2" size={32} weight="semibold" color="gray9" className="mb-10 text-center">
          Follow us on Instagram
        </Text>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`relative rounded-lg overflow-hidden transition-shadow duration-300 border border-gray-100 bg-white ${post.isHighlighted ? 'shadow-lg border-primary scale-105 z-10' : 'hover:shadow-md hover:border-primary'}`}
            >
              <ImagePlaceHolder
                src={post.image}
                alt={`Instagram post ${post.id.toString()}`}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
              {post.isHighlighted && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
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
