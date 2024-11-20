'use client';
import type { Crumb } from '@/lib/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Breadcrumb() {
  let path = usePathname().replace('/', '');

  path = path[0].toUpperCase() + path.slice(1);

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
