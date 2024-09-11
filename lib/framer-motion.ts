import { Variants } from "framer-motion";

export const ToolBoxVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const leftTransition: Variants = {
  offscreen: {
    x: -200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 3,
    },
  },
};

export const rightTransition: Variants = {
  offscreen: {
    x: 200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 3,
    },
  },
};

export const bottomTransition: Variants = {
  offscreen: {
    y: -100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 2,
    },
  },
};

export const charVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const variants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
