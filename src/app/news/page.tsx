import Common from '@/components/Hero/Common';
import MainWrapper from '@/components/MainWrapper';
import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import Link from 'next/link';

export const dynamic = 'force-static';

export default async function Page({ params }: any) {
  const pages = await directus.request(
    readItems('Articles', {
      fields: ['*'],
    })
  );

  const publishedPages = pages.filter((item) => item.status === 'published');

  return (
    <>
      <Common title='NEWS' />
      <MainWrapper isNavbar>
        <div className='grid w-full grid-cols-4 gap-4'>
          {publishedPages.map((p) => {
            return (
              <div key={p.id}>
                <Link href={`/news/${p.id}`}>{p.title}</Link>
              </div>
            );
          })}
        </div>
      </MainWrapper>
    </>
  );
}
