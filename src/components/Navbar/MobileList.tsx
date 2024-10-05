import navbarData from './navbarData';

export default function MobileList() {
  const list = navbarData();
  return (
    <ul className='w-full flex flex-col'>
      {list.map((i) => (
        <li
          className='w-full p-4 flex items-center justify-center'
          key={i.label}
        >
          {i.label}
        </li>
      ))}
    </ul>
  );
}
