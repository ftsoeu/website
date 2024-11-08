export default function CallToAction(props: { action?: string }) {
  return (
    <button className='bg-primary my-auto rounded-xl p-5 text-[#ddf]'>
      {props.action}
    </button>
  );
}
