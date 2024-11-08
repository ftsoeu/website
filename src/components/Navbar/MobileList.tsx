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
        <ul
          className='absolute z-40 bg-[rgb(255,255,255)] overflow-hidden right-0  left-0 bottom-0 flex flex-col'
          style={{ top: '78px' }}
        >
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
