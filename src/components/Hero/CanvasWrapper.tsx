export default function CanvasWrapper(props: {
  className?: string;
  children: string | JSX.Element[] | JSX.Element;
}) {
  return <canvas className={props.className}>{props.children}</canvas>;
}
