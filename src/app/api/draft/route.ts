import { draftMode } from 'next/headers';
import directus from '@/lib/directus';
import { readItem } from '@directus/sdk';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const id = searchParams.get('id');

  if (process.env.NODE_ENV === 'development') {
    return new Response('Not in Prod', { status: 401 });
  }

  if (secret !== 'MY_SECRET_TOKEN') {
    return new Response('Invalid token', { status: 401 });
  }

  if (!id) {
    return new Response('Missing id', { status: 401 });
  }

  const post = await directus.request(readItem('Articles', id));

  if (!post) {
    return new Response('Invalid id', { status: 401 });
  }

  draftMode().enable();

  return new Response(null, {
    status: 307,
    headers: {
      Location: `/draft/${id}`,
    },
  });
}
