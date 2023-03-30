import { motion, useCycle } from 'framer-motion';
import { useRef } from 'react';
import { MenuToggle, NavMenu } from '..';
import { NavigationProps } from '@/interfaces';
import { fadeInOut } from '@/variants';
import classNames from 'classnames';
import Link from 'next/link';

export function Navigation({ page }: NavigationProps) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const homePage = page == 'home';

  return (
    <div
      className={classNames(
        {
          'text-gray-700': !homePage,
        },
        { 'text-project-white': homePage }
      )}
    >
      <NavMenu isOpen={isOpen} />
      <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
      <motion.header
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={fadeInOut}
        ref={containerRef}
        className={classNames(
          'w-full flex items-center justify-center py-0.5 px-4 md:px-6 fixed top-0 z-30',
          {
            'bg-project-white': !homePage,
          },
          { 'bg-transparent': homePage }
        )}
      >
        <div className="navbar lg:px-0">
          {!homePage && (
            <motion.div animate={isOpen ? 'open' : 'closed'} variants={fadeInOut}>
              <Link href="/">
                <h1 className="block sm:hidden text-2xl">
                  B <span className="text-[2rem]">&</span> K
                </h1>
                <h1 className="hidden sm:block text-3xl">
                  Brittani <span className="text-[2.375rem]">&</span> Klaven
                </h1>
              </Link>
            </motion.div>
          )}
          <motion.div animate={isOpen ? 'open' : 'closed'} variants={fadeInOut}></motion.div>
          <div className="ml-auto">{/* <MenuToggle toggle={() => toggleOpen()} /> */}</div>
        </div>
      </motion.header>
    </div>
  );
}
