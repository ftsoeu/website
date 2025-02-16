export default function Block(props: { title: string; description: string }) {
  return (
    <div className='p-6 w-full lg:w-80 bg-gradient-to-r from-blue-800 to-blue-700 rounded-2xl'>
      <h3 className='text-xl font-bold mb-2'>{props.title}</h3>
      <p className='font-ultralight'>{props.description}</p>
    </div>
  );
}
