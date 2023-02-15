import { ReactNode } from 'react';
import { Navigation } from '../navigation';
import { Hero } from '../hero';
import { Marquee } from '../marquee';

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
      <main className="px-4 py-10 max-w-[1440px] mx-auto sm:p-6">{children}</main>
      <footer className="py-10">
        <div>
          <Marquee direction="left" />
        </div>
        <div className="mt-1">
          <Marquee direction="right" />
        </div>
      </footer>
    </>
  );
}
