'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import useNavbarStore from '@/components/Navbar/useNavbarStore';
import navbarData, { NavLink } from './navbarData';

function DesktopNav() {
  return <>Desktop</>;
}

function MobileNav() {
  return <>Mobile</>;
}

export default function Navbar() {
  const { isOpen, isMobile, handleMobile } = useNavbarStore();

  const isOpenState = isOpen ? `It's open` : `It's closed`;
  const isMobileState = isMobile ? `It's a Mobile` : `It's a Desktop`;

  const links = navbarData();
  useEffect(() => {
    handleMobile(window.navigator.userAgent);
  }, [isMobile, handleMobile]);

  return (
    <>
      Navbar {isOpenState}. And {isMobileState}. Links:
      <br />
      <ul>
        {links.map((link) => {
          return (
            <li key={link.label}>
              <Link href={link.url}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
