import { motion, useCycle } from 'framer-motion';
import { useRef } from 'react';
import { MenuToggle } from '../menu.toggle/menu.toggle';
import { NavMenu } from '../nav.menu';

export function Navigation() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <>
      <NavMenu isOpen={isOpen} />
      <motion.header
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
      </motion.header>
    </>
  );
}
