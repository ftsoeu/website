import { Hero } from '@/lib/types';

const heroData: () => Hero = () => {
  return {
    title: 'Hero default',
    description: 'hero description',
    callToAction: {
      label: 'Call me',
      action: '/sample-to-call',
    },
  };
};

export default heroData;
