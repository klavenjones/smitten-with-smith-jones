// import { ReactNode } from 'react';
import { Navigation } from '../navigation';
import { Hero } from '../hero';

// interface LayoutProps {
//   children: ReactNode;
// }

export function Layout() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <section>
        <Hero />
      </section>
      {/* <main className="px-4 py-20 max-w-[1440px] mx-auto mt-10 sm:px-6">{children}</main> */}
    </>
  );
}
