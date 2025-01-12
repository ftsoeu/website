import Markdown from 'react-markdown';
import ReadLayout from '@/app/single-page-layout/layout';

import { notFound } from 'next/navigation';

import { draftMode } from 'next/headers';
import directus from '@/lib/directus';
import { readItem } from '@directus/sdk';

export const dynamic = 'force-dynamic';
interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return [];
}

export default async function Page({ params }: PageProps) {
  const draft = await draftMode();

  if (process.env.NODE_ENV !== 'development') {
    return notFound();
  }

  const id = (await params).id;

  const article = await directus.request(readItem('Articles', id));

  return (
    <ReadLayout>
      <Markdown>{`# ${article.title} \n\n ${article.content}`}</Markdown>
    </ReadLayout>
  );
}
