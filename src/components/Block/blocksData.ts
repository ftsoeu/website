import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';

const getBlocks = async () => {
  const blocks = await directus.request(readItems('LandingCards'));
  return blocks;
};

export default getBlocks;
