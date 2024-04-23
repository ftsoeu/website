'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import useNavbarStore from '@/components/Navbar/useNavbarStore';
import navbarData from '@/components/Navbar/navbarData';
import { navigationBarValidation, NavLink } from '@/lib/types';
import MainWrapper from '@/components/MainWrapper';
import Logo from '@/components/Icons/Logo';

function DesktopNav(props: { links: NavLink[] }) {
  return <>Desktop</>;
}

function MobileNav(props: { links: NavLink[]; isOpen?: boolean }) {
  if (typeof props.isOpen === undefined) {
    return <>Menu is loading</>;
  }
  return (
    <>
      <ul className='w-full flex flex-col'>
        {props.links.map((i) => (
          <li>
            <Link href={i.src}>{i.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Navbar() {
  const { isOpen, isMobile, handleMobile } = useNavbarStore();

  const isOpenState = isOpen ? `It's open` : `It's closed`;
  const isMobileState = isMobile ? `It's a Mobile` : `It's a Desktop`;

  const links = navbarData();

  if (navigationBarValidation.safeParse(links).success === false) {
    return <>Unable to load Navigation bar</>;
  }

  useEffect(() => {
    handleMobile(window.navigator.userAgent);
  }, [isMobile, handleMobile]);

  return (
    <MainWrapper>
      <Logo />
      {isMobile ? (
        <MobileNav links={links} isOpen={isOpen} />
      ) : (
        <DesktopNav links={links} />
      )}
    </MainWrapper>
  );
}
