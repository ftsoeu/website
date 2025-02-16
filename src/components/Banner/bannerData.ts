import directus from '@/lib/directus';
import { readSingleton } from '@directus/sdk';

const getBanner = async () => {
  const banner = await directus.request(readSingleton('Banner'));
  return banner;
};

const bannerData = async () => {
  const banner = await getBanner();
  return {
    title:
      banner.Title ||
      'We are an European based Signal Infrastructure Provider on the Flare Network.',
    description:
      banner.Description ||
      'We collect latest price ticker from multiple data sources (exchanges, dex and defi).',
  };
};

export default bannerData;
