'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  let path = usePathname().replace('/', '');

  path = (path[0].toUpperCase() + path.slice(1).replaceAll('-', ' ')).replace(
    '/',
    ' > '
  );

  return (
    <>
      <div className='bg-primary py-5'>
        <div className='container text-[#fff]'>
          <Link href='/'>Home</Link> &gt; {path}
        </div>
      </div>
    </>
  );
}
