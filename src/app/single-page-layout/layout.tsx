import CallToAction from '@/components/CallToAction/CallToAction';
import { ReactNode } from 'react';

interface ReadLayoutProps {
  children: ReactNode;
}

export default function ReadLayout({ children }: ReadLayoutProps) {
  return (
    <>
      <div className='bg-primary py-5'>
        <div className='container text-[#fff]'>breadcrumb &gt; single page</div>
      </div>
      <div className='container mt-5'>
        {children} <CallToAction action={'Delegate with us'} />
      </div>
    </>
  );
}
