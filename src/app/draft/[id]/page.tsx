import Markdown from 'react-markdown';
import ReadLayout from '@/app/single-page-layout/layout';
import remarkGfm from 'remark-gfm';
import { redirect } from 'next/navigation';

import { draftMode } from 'next/headers';
import directus from '@/lib/directus';
import { readItem } from '@directus/sdk';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  console.log('here');
  const draft = await draftMode();

  if (process.env.NODE_ENV !== 'development') {
    redirect('/');
  }

  const id = (await params).id;

  const article = await directus.request(readItem('Articles', id));

  return (
    <ReadLayout>
      <Markdown>{`# ${article.title} \n\n ${article.content}`}</Markdown>
    </ReadLayout>
  );
}

export const dynamic = 'force-dynamic';
