import { createDirectus, rest, staticToken } from '@directus/sdk';
import { ImageLoader } from 'next/image';

type Global = {
  title: string;
  description: string;
};

type Author = {
  name: string;
};

type Page = {
  title: string;
  content: string;
  slug: string;
};

export type Article = {
  id: string;
  cover: string;
  title: string;
  author: Author;
  content: string;
  published_date: string;
  slug: string;
  status: string;
};

export type CallToAction = {
  label: string;
  url: string;
  shortDescription: string;
  description: string;
};

export type Hero = {
  Title: string;
  Description: string;
};

export type Banner = {
  Title: string;
  Description: string;
};

export type Pair = {
  id: string;
  Title: string;
  Description?: string | null;
  status: string;
};

export type LandingCard = {
  Title: string;
  Description: string;
  order: number;
};

type Schema = {
  global: Global;
  Articles: Article[];
  CallToAction: CallToAction;
  Hero: Hero;
  Banner: Banner;
  LandingCards: LandingCard[];
  Pairs: Pair[];
};

const directus = createDirectus<Schema>(
  process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055'
)
  //.with(staticToken('d9coHNyZLTbAUQJ2LbTm7oOOmUTPteKg'))
  .with(rest());

export const directusLoader: ImageLoader = ({ src, width, quality }) => {
  return `${
    process.env.NEXT_PUBLIC_DIRECTUS_URL
  }/assets/${src}?width=${width}&quality=${quality || 75}`;
};

export default directus;
