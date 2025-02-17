import Link from 'next/link';
import { Icons } from '@/lib/icons';

import HomeIcon from '@/components/Icons/HomeIcon';
import NewsIcon from '@/components/Icons/NewsIcon';
import DappsIcon from '@/components/Icons/DappsIcon';
import InfoIcon from '@/components/Icons/InfoIcon';
import useNavbarStore from './useNavbarStore';

export default function ButtonBar(props: {
  src: string;
  label: string;
  icon?: string;
}) {
  const { isOpen, handleOpen } = useNavbarStore();

  const toggleMenu = () => {
    handleOpen(!isOpen);
  };

  let icon = <></>;
  icon = props.icon == Icons.home ? <HomeIcon /> : icon;
  icon = props.icon == Icons.news ? <NewsIcon /> : icon;
  icon = props.icon == Icons.dapps ? <DappsIcon /> : icon;
  icon = props.icon == Icons.info ? <InfoIcon /> : icon;

  return (
    <Link
      href={props.src}
      onClick={() => toggleMenu()}
      className='p-2 flex flex-row rounded-sm  items-center hover:bg-primary hover:text-[#ffffff] hover:dark:text-white'
    >
      {icon}
      <div className='font-thin ml-2 pt-1 text-sm'>
        {props.label.toUpperCase()}
      </div>
    </Link>
  );
}
