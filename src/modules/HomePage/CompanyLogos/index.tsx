import { Container } from '@/components/Container';
import ImagePlaceHolder from '@/components/ImagePlaceHolder';
import React from 'react';
import styles from './companyLogos.module.scss';

function CompanyLogos(): React.ReactElement {
  const logos = [
    {
      id: 1,
      name: 'Steps',
      image:
        'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Mango',
      image:
        'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Food',
      image:
        'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Food Network',
      image:
        'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 5,
      name: 'Book Off',
      image:
        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 6,
      name: 'G Series',
      image:
        'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop',
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
