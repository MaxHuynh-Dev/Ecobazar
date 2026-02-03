import { Container } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import React from 'react';

function CompanyLogos(): React.ReactElement {
  const logos = [
    {
      id: 1,
      name: 'Steps',
      image: '/images/hotdeal/Image-10.jpg',
    },
    {
      id: 2,
      name: 'Mango',
      image: '/images/hotdeal/Image-10.jpg',
    },
    {
      id: 3,
      name: 'Food',
      image: '/images/hotdeal/Image-10.jpg',
    },
    {
      id: 4,
      name: 'Food Network',
      image: '/images/hotdeal/Image-10.jpg',
    },
    {
      id: 5,
      name: 'Book Off',
      image: '/images/hotdeal/Image-10.jpg',
    },
    {
      id: 6,
      name: 'G Series',
      image: '/images/hotdeal/Image-10.jpg',
    },
  ];

  return (
    <div className="py-[60px]">
      <Container>
        <div className="flex items-center justify-between gap-6">
          {logos.map((logo, index) => (
            <React.Fragment key={logo.id.toString()}>
              <div className="flex flex-1 items-center justify-center opacity-70 transition-opacity duration-300 ease-in-out hover:opacity-100">
                <ImagePlaceHolder src={logo.image} alt={logo.name} width={120} height={50} />
              </div>
              {index < logos.length - 1 && <div className="w-px h-8 bg-gray-200" />}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CompanyLogos;
