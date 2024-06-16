"use client";
import Lenis from "@studio-freight/lenis/types";
import React, { useEffect } from "react";

const LazyScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 10.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};

export default LazyScroll;
