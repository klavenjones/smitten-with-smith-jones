/* 
    This file will contain variants for Framer Motion Animations
*/

export const galleryVariant = {
  hidden: { opacity: 0, transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] } },
  shown: { opacity: 1, transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] } },
};

export const photoVariant = {
  open: { opacity: 1, y: 0, transition: { type: 'easeIn', duration: 0.5 } },
  closed: { opacity: 0, y: 400, transition: { type: 'easeIn', duration: 0.5 } },
};

export const menuVariant = {
  open: { opacity: 1, y: 0, transition: { type: 'easeIn', duration: 0.5 } },
  closed: { opacity: 0, y: -500, transition: { type: 'easeIn', duration: 0.5 } },
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
      y: { stiffness: 1000, velocity: -300 },
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
    display: 'block',
    transform: 'translateY(200%)',
    transition: {
      ease: 'easeIn',
    },
    transitionEnd: { display: 'none' },
  },
  closed: {
    transform: 'translateY(0%)',
    transition: {
      ease: 'easeIn',
    },
  },
};

export const fadeInOut = {
  open: {
    opacity: 0,
    transition: {
      ease: 'easeOut',
    },
  },
  closed: {
    opacity: 1,
    transition: {
      ease: 'easeIn',
    },
  },
};
