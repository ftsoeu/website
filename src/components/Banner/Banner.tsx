import Link from 'next/link';

export default function Banner(props: { title: string; description: string }) {
  return (
    <div>
      <div className='p-12 text-center'>
        <p className='text-lg'>{props.title}</p>
        <p className='text-md text-gray-600 mt-2'>{props.description}</p>
      </div>
    </div>
  );
}
