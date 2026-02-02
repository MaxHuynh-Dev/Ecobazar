export const SLUG = {
  HOME: '/',
  SHOP: '/shop',
  PAGES: '/pages',
  BLOG: '/blog',
  ABOUT_US: '/about-us',
  CONTACT: '/contact',
  LOGIN: '/login',
  REGISTER: '/register',
  LIKED: '/liked',
  ORDER_HISTORY: '/order-history',
  SHOPPING_CART: '/shopping-cart',
  WISHLIST: '/wishlist',
  FAQS: '/faqs',
  TERMS: '/terms',
  PRIVACY: '/privacy',
  PRODUCT: '/product',
  TRACK_ORDER: '/track-order',
  FRUITS_VEG: '/category/fruits-vegetables',
  MEAT_FISH: '/category/meat-fish',
  BREAD_BAKERY: '/category/bread-bakery',
  BEAUTY_HEALTH: '/category/beauty-health',
};

export const FOOTER_ROUTER = [
  {
    label: 'My Account',
    links: [
      { label: 'My Account', href: SLUG.LOGIN },
      { label: 'Order History', href: SLUG.ORDER_HISTORY },
      { label: 'Shopping Cart', href: SLUG.SHOPPING_CART },
      { label: 'Wishlist', href: SLUG.WISHLIST },
    ],
  },
  {
    label: 'Helps',
    links: [
      { label: 'Contact', href: SLUG.CONTACT },
      { label: 'Faqs', href: SLUG.FAQS },
      { label: 'Terms & Condition', href: SLUG.TERMS },
      { label: 'Privacy Policy', href: SLUG.PRIVACY },
    ],
  },
  {
    label: 'Proxy',
    links: [
      { label: 'About', href: SLUG.ABOUT_US },
      { label: 'Shop', href: SLUG.SHOP },
      { label: 'Product', href: SLUG.PRODUCT },
      { label: 'Track Order', href: SLUG.TRACK_ORDER },
    ],
  },
  {
    label: 'Categories',
    links: [
      { label: 'Fruit & Vegetables', href: SLUG.FRUITS_VEG },
      { label: 'Meat & Fish', href: SLUG.MEAT_FISH },
      { label: 'Bread & Bakery', href: SLUG.BREAD_BAKERY },
      { label: 'Beauty & Health', href: SLUG.BEAUTY_HEALTH },
    ],
  },
];

export const ROUTER = [
  {
    label: 'Home',
    href: SLUG.HOME,
  },
  {
    label: 'Shop',
    href: SLUG.SHOP,
  },
  {
    label: 'Pages',
    href: SLUG.PAGES,
  },
  {
    label: 'Blog',
    href: SLUG.BLOG,
  },
  {
    label: 'About Us',
    href: SLUG.ABOUT_US,
  },
  {
    label: 'Contact us',
    href: SLUG.CONTACT,
  },
];

