import Link from 'next/link';
import { Icons } from '@/lib/icons';

import HomeIcon from '@/components/Icons/HomeIcon';
import NewsIcon from '@/components/Icons/NewsIcon';
import DappsIcon from '@/components/Icons/DappsIcon';
import InfoIcon from '@/components/Icons/InfoIcon';

export default function ButtonBar(props: {
  src: string;
  label: string;
  icon?: string;
}) {
  let icon = <></>;
  console.log(props.icon);
  console.log(Icons);
  icon = props.icon == Icons.home ? <HomeIcon /> : icon;
  icon = props.icon == Icons.news ? <NewsIcon /> : icon;
  icon = props.icon == Icons.dapps ? <DappsIcon /> : icon;
  icon = props.icon == Icons.info ? <InfoIcon /> : icon;

  return (
    <Link
      href={props.src}
      className='p-2 flex flex-row items-center hover:bg-primary hover:text-white'
    >
      {icon}
      <div className='font-thin ml-2 pt-1'>{props.label.toUpperCase()}</div>
    </Link>
  );
}
