export type NavLink = {
  label: undefined | string;
  url: string;
  icon: undefined | string;
};

export default () => {
  return [
    { label: 'home', url: '/' },
    { label: 'dapps & tools', url: '/dapps' },
    { label: 'Contact Us', url: '/contact-us' },
  ] as NavLink[];
};
