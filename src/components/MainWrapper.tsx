export default function MainWrapper(props: {
  children: (string | JSX.Element)[];
}) {
  return <div className='container'>{props.children}</div>;
}
