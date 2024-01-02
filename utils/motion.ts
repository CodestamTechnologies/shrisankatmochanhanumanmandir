export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0, y: 100 },
    visible: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.3,
        type: 'spring',
        ease: 'easeInOut',
        stiffness: 100,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0, y: 100 },
    visible: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.3,
        type: 'spring',
        ease: 'easeInOut',
        stiffness: 100,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};    