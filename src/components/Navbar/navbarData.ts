import type { NavigationBar } from '@/lib/types';

const navbarData = () => {
  return [
    { label: 'Home', src: '/', icon: 'home' },
    { label: 'News', src: '/news', icon: 'news' },
    { label: 'dApps & Tools', src: '/dapps', icon: 'tools' },
    { label: 'Contact Us', src: '/contact-us', icon: 'info' },
  ] as NavigationBar;
};

export default navbarData;
