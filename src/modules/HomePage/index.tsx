import CompanyLogos from '@Modules/HomePage/CompanyLogos';
import DiscountBanner from '@Modules/HomePage/DiscountBanner';
import Featured from '@Modules/HomePage/Featured';
import FeaturedProducts from '@Modules/HomePage/FeaturedProducts';
import Hero from '@Modules/HomePage/Hero';
import HotDeals from '@Modules/HomePage/HotDeals';
import InstagramFeed from '@Modules/HomePage/InstagramFeed';
import LatestNews from '@Modules/HomePage/LatestNews';
import PopularCategories from '@Modules/HomePage/PopularCategories';
import PopularProducts from '@Modules/HomePage/PopularProducts';
import PromoBanners from '@Modules/HomePage/PromoBanners';
import Testimonials from '@Modules/HomePage/Testimonials';
import type React from 'react';

function HomePage(): React.ReactElement {
  return (
    <>
      <Hero />
      <Featured />
      <PopularCategories />
      <HotDeals />
      <PromoBanners />
      <PopularProducts />
      <DiscountBanner />
      <FeaturedProducts />
      <LatestNews />
      <Testimonials />
      <CompanyLogos />
      <InstagramFeed />
    </>
  );
}

export default HomePage;
