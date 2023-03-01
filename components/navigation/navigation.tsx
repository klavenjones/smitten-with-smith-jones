import Link from 'next/link';
import { motion, useCycle } from 'framer-motion';
import { ReactNode, useRef } from 'react';

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

const photoVariant = {
  open: { opacity: 1, y: 0, transition: { ease: 'easeIn', duration: 0.35 } },
  closed: { opacity: 0, y: 300, transition: { ease: 'easeIn', duration: 0.35 } },
};

const menuVariant = {
  open: { opacity: 1, y: 0, transition: { ease: 'easeIn', duration: 0.35 } },
  closed: { opacity: 0, y: -300, transition: { ease: 'easeIn', duration: 0.35 } },
};

const containerVariant = {
  open: { display: 'flex', transition: { ease: 'linear' } },
  closed: { display: 'none', transition: { ease: 'linear', delay: 0.35 } },
};

const navVariants = {
  open: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const navItemVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuToggleProps {
  toggle: () => void;
}

interface NavMenuProps {
  isOpen: boolean;
}

/* 
   Will place in seperate file soon
*/

const Path = (props: any): JSX.Element => (
  <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" {...props} />
);

const AnimatedContainer = (props: any): JSX.Element => <motion.div {...props}>{props.children}</motion.div>;

export function MenuToggle({ toggle }: MenuToggleProps): JSX.Element {
  return (
    <button
      onClick={toggle}
      className="btn btn-square btn-ghost z-50 text-project-white transition-all duration-500 hover:bg-transparent"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-7 h-7 sm:h-8 sm:w-8 stroke-current"
      >
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5', color: '#f0f5f7' },
            open: { d: 'M 3 16.5 L 17 2.5', color: '#616C75' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346', color: '#f0f5f7' },
            open: { d: 'M 3 2.5 L 17 16.346', color: '#616C75' },
          }}
        />
      </svg>
    </button>
  );
}

export function NavMenu({ isOpen }: NavMenuProps) {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={containerVariant}
      className="h-screen w-full absolute top-0 flex z-10"
    >
      <AnimatedContainer
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={photoVariant}
        className="hero menu-image hidden md:block"
      ></AnimatedContainer>
      <AnimatedContainer
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariant}
        className="w-full h-full bg-background flex items-center justify-center"
      >
        <motion.ul variants={navVariants} className="w-2/3 h-2/3 flex flex-col justify-center  space-y-10">
          {navLinks.map(
            (item, i): ReactNode => (
              <motion.li
                variants={navItemVariant}
                className=" text-center text-tertiary sm:text-left"
                key={item.name}
                tabIndex={i}
              >
                <Link
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase  transition-all duration-500 hover:bg-transparent hover:text-bone"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </motion.li>
            )
          )}
        </motion.ul>
      </AnimatedContainer>
    </motion.div>
  );
}

export function Navigation() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <>
      <NavMenu isOpen={isOpen} />
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        ref={containerRef}
        className="w-full bg-transparent flex items-center justify-center py-2 fixed top-0 z-50"
      >
        <div className="navbar bg-transparent lg:px-0">
          <div className="ml-auto">
            <MenuToggle toggle={() => toggleOpen()} />
          </div>
        </div>
      </motion.nav>
    </>
  );
}

/* 
    Old Navigation: Will Delete Later
*/

export function OldNavigation() {
  return (
    <nav className="w-full bg-white flex items-center justify-center py-2 shadow-lg fixed top-0 z-50">
      <div className="navbar bg-base-100 max-w-[1440px] lg:px-0">
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
          <Link tabIndex={7} href="/" className="hidden sm:block  text-4xl">
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
              <ul className="menu hidden sm:menu-horizontal">
                {navLinks.slice(3).map(
                  (item, i): ReactNode => (
                    <li key={item.name} tabIndex={i + 3}>
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
