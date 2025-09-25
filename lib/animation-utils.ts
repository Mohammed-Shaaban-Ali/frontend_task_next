import { useInView } from "motion/react";
import { useRef } from "react";

// Custom hook for scroll-triggered animations
export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: triggerOnce,
    amount: threshold 
  });

  return { ref, isInView };
};

// Animation delay utility
export const getStaggerDelay = (index: number, baseDelay = 0.1) => {
  return index * baseDelay;
};

// Responsive animation variants
export const getResponsiveVariant = (isMobile: boolean, mobileVariant: any, desktopVariant: any) => {
  return isMobile ? mobileVariant : desktopVariant;
};

// Animation presets for common use cases
export const animationPresets = {
  // Quick fade for subtle elements
  quickFade: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } }
  },
  
  // Smooth slide for content sections
  smoothSlide: {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } 
    }
  },
  
  // Gentle scale for interactive elements
  gentleScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  }
};