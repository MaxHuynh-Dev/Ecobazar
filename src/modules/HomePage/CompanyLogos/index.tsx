import { Container } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import React from 'react';
import styles from './companyLogos.module.scss';

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
    <div className={styles.companyLogos}>
      <Container>
        <div className={styles.companyLogos_wrapper}>
          {logos.map((logo, index) => (
            <React.Fragment key={logo.id.toString()}>
              <div className={styles.companyLogos_item}>
                <ImagePlaceHolder src={logo.image} alt={logo.name} width={120} height={50} />
              </div>
              {index < logos.length - 1 && <div className={styles.companyLogos_divider} />}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CompanyLogos;
