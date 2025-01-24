import { createDirectus, rest, staticToken } from '@directus/sdk';

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

type Schema = {
  Articles: Article[];
  //global: Global;
  //pages: Page[];
};

const directus = createDirectus<Schema>(
  process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055'
)
  //.with(staticToken('d9coHNyZLTbAUQJ2LbTm7oOOmUTPteKg'))
  .with(rest());

export default directus;
