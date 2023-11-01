'use client';
import { useEffect } from 'react';
import useNavbarStore from '@/components/Navbar/useNavbarStore';

export default function Navbar() {
  const { isOpen, isMobile, handleMobile } = useNavbarStore();

  const isOpenState = isOpen ? `It's open` : `It's closed`;
  const isMobileState = isMobile ? `It's a Mobile` : `It's a Desktop`;

  useEffect(() => {
    handleMobile(window.navigator.userAgent);
  }, [isMobile, handleMobile]);

  return (
    <>
      Navbar {isOpenState}. And {isMobileState}
    </>
  );
}
