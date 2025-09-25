"use client";
import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { pageTransition } from "@/lib/animations";

// This component is to keep the / route a server component
function HomeMotionWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.section
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.section>
  );
}

export default HomeMotionWrapper;
