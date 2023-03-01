import { MenuToggleProps } from '@/interfaces';
import { motion } from 'framer-motion';

// eslint-disable-next-line
const Path = (props: any): JSX.Element => (
  <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" {...props} />
);

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
