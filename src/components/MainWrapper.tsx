export default function MainWrapper(props: {
  className?: string;
  isNavbar?: boolean;
  isTransparent?: boolean;
  children: string | JSX.Element | (string | JSX.Element)[];
}) {
  const isTransparent = props.isTransparent ? 'bg-[#fff] bg-opacity-100' : '';
  const isNavbar = props.isNavbar ? props.isNavbar : false;
  const className = isNavbar
    ? 'container mx-auto flex justify-between items-center py-2' + isTransparent
    : 'w-full sticky top-0 ' + props.className + ' ' + isTransparent;

  return <div className={className}>{props.children}</div>;
}
