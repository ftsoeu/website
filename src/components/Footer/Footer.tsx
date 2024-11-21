'use client';
import Link from 'next/link';
import MainWrapper from '@/components/MainWrapper';

import useNavbarStore from '@/components/Navbar/useNavbarStore';
import Social from '@/components/Social/Social';

export default function Footer() {
  const { isMobile } = useNavbarStore();

  return (
    <MainWrapper>
      <MainWrapper isNavbar className='bg-red'>
        <div>
          <Link href='/privacy'>privacy</Link>
        </div>
        <div>
          {isMobile && '© 2024 FTSO.eu'}
          {!isMobile && '© 2024 FTSO.eu. All rights reserved.'}
        </div>
        <div>
          <Social />
        </div>
      </MainWrapper>
    </MainWrapper>
  );
}
