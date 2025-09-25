import { Variants } from "motion/react";

// Page transition animations
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// WhileInView animations
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -60 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -60 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 60 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const scaleInView: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const rotateInView: Variants = {
  initial: { opacity: 0, rotate: -10, scale: 0.9 },
  whileInView: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Stagger container for whileInView
export const staggerContainerInView: Variants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Individual item animations for staggered content with whileInView
export const staggerItemInView: Variants = {
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Text reveal animations
export const textRevealInView: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Image reveal with whileInView
export const imageRevealInView: Variants = {
  initial: { opacity: 0, scale: 1.1, y: 30 },
  whileInView: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Card animations with whileInView
export const cardSlideInView: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Navbar animations (keeping original for immediate load)
export const slideDown: Variants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Button hover animations
export const buttonHover = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    // ease: "easeInOut"
  },
};

export const buttonTap = {
  scale: 0.98,
  transition: {
    duration: 0.1,
    // ease: "easeInOut"
  },
};

// Navigation animations
export const navItemHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    // ease: "easeInOut"
  },
};

// Loading animations
export const loadingSpinner: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      // ease: "linear"
    },
  },
};

// Form field animations
export const formFieldFocus = {
  scale: 1.02,
  transition: {
    duration: 0.2,
    // ease: "easeOut"
  },
};

// Counter animation with whileInView
export const counterAnimationInView: Variants = {
  initial: { opacity: 0, scale: 0.5 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      // ease: "easeOut"
    },
  },
};

// Section divider animation
export const dividerInView: Variants = {
  initial: { width: 0, opacity: 0 },
  whileInView: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 1,
      // ease: "easeOut"
    },
  },
};
