import type { NavigationBar } from '@/lib/types';

const navbarData = () => {
  return [
    { label: 'Home', src: '/' },
    { label: 'News', src: '/news' },
    { label: 'dApps & Tools', src: '/dapps' },
    { label: 'Contact Us', src: '/contact-us' },
  ] as NavigationBar;
};

export default navbarData;
