import { Variants } from "framer-motion";

export const ToolBoxVariants: Variants = {
  offscreen: {
    x: -600,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 5,
    },
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
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 3,
    },
  },
};
