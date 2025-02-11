import { Hero } from '@/lib/types';
import directus from '@/lib/directus';
import { readSingleton } from '@directus/sdk';

const getCallToAction = async () => {
  const cta = await directus.request(readSingleton('CallToAction'));
  return cta;
};

const getHero = async () => {
  const hero = await directus.request(readSingleton('Hero'));
  return hero;
};

const heroData = async () => {
  const hero = await getHero();
  const cta = await getCallToAction();
  return {
    title: hero.Title || 'We partecipate at the <br />Flare Time Series Oracle',
    description: hero.Description || 'We are a Flare Infrastructure Provider',
    callToAction: {
      label: cta.label,
      action: cta.url,
    },
  };
};

export default heroData;
