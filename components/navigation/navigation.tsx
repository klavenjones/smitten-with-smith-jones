import Link from 'next/link';
import { ReactNode } from 'react';

const navLinks = [
  {
    href: '/our-story',
    name: 'Our Story',
  },
  {
    href: '/details',
    name: 'Details',
  },
  {
    href: '/travel',
    name: 'Travel',
  },
  {
    href: '/photos',
    name: 'Photos',
  },
  {
    href: '/registry',
    name: 'Registry',
  },
  {
    href: '/rsvp',
    name: 'RSVP',
  },
];

export function Navigation() {
  return (
    <nav className="w-full bg-white flex items-center justify-center py-4 shadow-lg fixed top-0 z-50">
      <div className="navbar bg-base-100 max-w-[1440px] p-0">
        <div className="navbar-start">
          <div className="dropdown sm:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="menu hidden sm:menu-horizontal">
              {navLinks.slice(0, 3).map(
                (item, i): ReactNode => (
                  <li key={item.name} tabIndex={i}>
                    <Link
                      className="text-xl tracking-wide uppercase hover:bg-transparent hover:text-gray-400"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/" className="hidden sm:block  text-4xl">
            <h1>Brittani & Klaven</h1>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="sm:hidden">
            <a className="btn btn-ghost normal-case text-3xl">
              <h1>B & K</h1>
            </a>
          </div>
          <div className="hidden sm:block">
            <div>
              <ul className="menu hidden sm:menu-horizontal sm:space-x-2">
                {navLinks.slice(3).map(
                  (item, i): ReactNode => (
                    <li key={item.name} tabIndex={i}>
                      <Link
                        className="text-xl tracking-wide uppercase hover:bg-transparent hover:text-gray-400"
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
