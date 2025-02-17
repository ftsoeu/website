import type { Article } from '@/lib/directus';
import Link from 'next/link';

export default function Article(props: { data: Article }) {
  console.log(props.data);
  return (
    <div key={props.data.id} className='bg-primary rounded-md'>
      <div className='w-full mb-3'>
        <img
          src={` ${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${props.data.cover}`}
          alt={props.data.title}
          className='rounded-md'
        />
      </div>
      <div className=' p-3 pb-5'>
        <Link href={`/news/${props.data.slug}`} className='text-white'>
          {props.data.title}
        </Link>
      </div>
    </div>
  );
}
