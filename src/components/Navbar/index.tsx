'use client';
import useNavbarStore from '@/components/Navbar/useNavbarStore';

export default function Navbar() {
  const { isOpen, isMobile } = useNavbarStore();
  const isOpenState = isOpen ? `It's open` : `It's closed`;
  return <>Navbar {isOpenState}</>;
}
