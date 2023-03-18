import { MenuToggleProps } from '@/interfaces';
import classNames from 'classnames';
import { motion } from 'framer-motion';

// eslint-disable-next-line
const Path = (props: any): JSX.Element => (
  <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" {...props} />
);

export function MenuToggle({ toggle, isOpen }: MenuToggleProps): JSX.Element {
  return (
    <div className="z-[100] fixed top-[15px] right-[1.5rem]">
      <button
        onClick={toggle}
        className={classNames(
          'relative transition-all duration-100 w-10 h-10 hover:bg-transparent',
          {
            'text-typography': isOpen,
          },
          { 'text-current': !isOpen }
        )}
      >
        <span className="sr-only">Open Main Menu</span>
        <div className="w-6 absolute left-1/2 top-1/2  transform  -translate-x-1/2 -translate-y-1/2">
          <span
            aria-hidden="true"
            className={classNames(
              'block absolute h-0.5 w-full bg-current transition-all duration-500 ease-in-out',
              {
                'rotate-45': isOpen,
              },
              { ' -translate-y-1.5': !isOpen }
            )}
          />

          <span
            aria-hidden="true"
            className={classNames('block absolute h-0.5 w-full bg-current transition-all duration-500 ease-in-out', {
              'opacity-0': isOpen,
            })}
          />

          <span
            aria-hidden="true"
            className={classNames(
              'block absolute h-0.5 w-full bg-current transition-all duration-500 ease-in-out',
              {
                '-rotate-45': isOpen,
              },
              { 'translate-y-1.5': !isOpen }
            )}
          />
        </div>
      </button>
    </div>
  );
}
