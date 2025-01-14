import Markdown from 'react-markdown';
import ReadLayout from '@/app/single-page-layout/layout';
import remarkGfm from 'remark-gfm';
import { redirect } from 'next/navigation';

import directus from '@/lib/directus';
import { readItems, readItem } from '@directus/sdk';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  console.log('Generating Single Article');
  console.log('Called protected url: ', process.env.DIRECTUS_URL);
  console.log('Called next public url: ', process.env.NEXT_PUBLIC_DIRECTUS_URL);

  const pages = await directus.request(
    readItems('Articles', {
      fields: ['*'],
    })
  );
  console.log(pages);
  console.log(directus);
  return pages.map((page) => ({
    slug: page.id,
  }));
}

export default async function Page({ params }: any) {
  const page = await directus.request(readItem('Articles', params.slug));
  console.log(page);
  return (
    <ReadLayout>
      <Markdown>
        {`# ${page.title}
        
        ${page.content}
        `}
      </Markdown>
    </ReadLayout>
  );
}

export const dynamic = 'force-static';
