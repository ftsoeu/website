'use client';

import navbarData from '@/components/Navbar/navbarData';
import useNavbarStore from '@/components/Navbar/useNavbarStore';
import ButtonBar from './ButtonBar';

export default function MobileList() {
  const { isOpen } = useNavbarStore();
  const list = navbarData();
  return (
    <>
      {isOpen && (
        <ul className='w-full flex flex-col'>
          {list.map((i) => (
            <li
              className='w-full p-4 flex items-center justify-center'
              key={i.label}
            >
              <ButtonBar src={i.src} label={i.label} icon={i.icon} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
