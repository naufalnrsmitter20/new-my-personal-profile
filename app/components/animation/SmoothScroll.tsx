"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  return (
    <React.Fragment>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {children}
        <motion.div className="fixed bottom-0 left-0 right-0 h-[6px] w-full bg-white/80 z-40" style={{ scaleX: scrollYProgress }} />
      </motion.div>
    </React.Fragment>
  );
}
