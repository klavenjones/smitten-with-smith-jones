import { NavMenuProps } from '@/interfaces';
import {
  containerVariant,
  photoVariant,
  menuVariant,
  navVariants,
  navItemVariant,
  navItemOverlayVariant,
} from '@/variants';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

const navLinks = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/our-story',
    name: 'Our Story',
  },
  {
    href: '/details',
    name: 'Details',
  },
  {
    href: '/questions',
    name: 'Questions',
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

// eslint-disable-next-line
const AnimatedContainer = (props: any): JSX.Element => <motion.div {...props}>{props.children}</motion.div>;

export function NavMenu({ isOpen }: NavMenuProps) {
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={containerVariant}
      className="h-screen w-full fixed top-0 flex z-10"
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
        className="w-full h-full bg-project-white flex items-center justify-center"
      >
        <motion.ul variants={navVariants} className="w-2/3 h-2/3 flex flex-col justify-center space-y-10">
          {navLinks.map(
            (item, i): ReactNode => (
              <motion.li
                variants={navItemVariant}
                className="text-center text-gray-700 sm:text-left relative"
                key={item.name}
                tabIndex={i}
              >
                <motion.div variants={navItemOverlayVariant} className="bg-project-white h-full w-full absolute" />
                <Link
                  className="text-3xl md:text-4xl lg:text-5xl tracking-wide lowercase font-light transition-all duration-500  hover:text-primary"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </motion.li>
            )
          )}
        </motion.ul>
      </AnimatedContainer>
    </motion.nav>
  );
}
