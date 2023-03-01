/* 
    This file will contain variants for Framer Motion Animations
*/

export const photoVariant = {
  open: { opacity: 1, y: 0, transition: { type: 'easeIn', duration: 0.5 } },
  closed: { opacity: 0, y: 300, transition: { type: 'easeIn', duration: 0.5 } },
};

export const menuVariant = {
  open: { opacity: 1, y: 0, transition: { type: 'easeIn', duration: 0.5 } },
  closed: { opacity: 0, y: -300, transition: { type: 'easeIn', duration: 0.5 } },
};

export const containerVariant = {
  open: { display: 'flex', transition: { ease: 'linear' } },
  closed: { display: 'none', transition: { ease: 'linear', delay: 0.6 } },
};

export const navVariants = {
  open: {
    transition: { staggerChildren: 0.15, delayChildren: 0.8 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const navItemVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      staggerChildren: 0.15,
    },
  },
  closed: {
    y: 30,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const navItemOverlayVariant = {
  open: {
    transform: 'translateY(100%)',
    transition: {
      ease: 'easeIn',
    },
  },
  closed: {
    transform: 'translateY(0%)',
    transition: {
      ease: 'easeIn',
    },
  },
};
