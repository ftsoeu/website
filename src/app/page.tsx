import NavBar from '@/components/Navbar/NavBar';
import MobileList from '@/components/Navbar/MobileList';
import Main from '@/components/Hero/Main';

export default function Home() {
  return (
    <div className='absolute w-full h-full'>
      <NavBar />
      <MobileList />
      <Main />
    </div>
  );
}
