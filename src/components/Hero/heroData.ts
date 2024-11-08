import { Hero } from '@/lib/types';

const heroData: () => Hero = () => {
  return {
    title: 'We partecipate at the <br />Flare Time Series Oracle',
    description: 'We are a Flare Infrastructure Provider',
    callToAction: {
      label: 'Delegate with us',
      action: '/sample-to-call',
    },
  };
};

export default heroData;
