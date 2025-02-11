import Link from 'next/link';

export default function CallToAction(props: { label: string; url: string }) {
  let target = '_SELF';
  if (props.url.startsWith('https')) {
    target = '_BLANK';
  }
  return (
    <Link href={props.url} target={target}>
      <button className='bg-primary my-auto rounded-xl p-5 text-[#ddf]'>
        {props.label}
      </button>
    </Link>
  );
}
