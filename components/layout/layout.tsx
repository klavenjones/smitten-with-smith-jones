import { ReactNode } from 'react';
import { Navigation } from '../navigation';
import { Hero } from '../hero';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <section>
        <Hero />
      </section>
      <main className="p-4 max-w-[1440px] mx-auto sm:p-6">{children}</main>
    </>
  );
}
