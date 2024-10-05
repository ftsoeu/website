'use client';
import NavBar from '@/components/NavBar/NavBar';
import MobileList from '@/components/NavBar/MobileList';
import useNavbarStore from '@/components/NavBar/useNavbarStore';

export default function Home() {
  const { isMobile, isOpen } = useNavbarStore();

  return (
    <>
      <NavBar />
      {isMobile && isOpen && <MobileList />}
    </>
  );
}
