'use client';
import Link from 'next/link';
import MainWrapper from '../MainWrapper';

import useNavbarStore from '@/components/Navbar/useNavbarStore';

export default function Footer() {
  const { isMobile, handleMobile } = useNavbarStore();

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
        <div>social</div>
      </MainWrapper>
    </MainWrapper>
  );
}
