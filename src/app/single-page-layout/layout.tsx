import { ReactNode } from 'react';

interface ReadLayoutProps {
  children: ReactNode;
}

export default function ReadLayout({ children }: ReadLayoutProps) {
  return (
    <div>
      <header>Read Layout Header</header>
      <main>{children}</main>
      <footer>Read Layout Footer</footer>
    </div>
  );
}
