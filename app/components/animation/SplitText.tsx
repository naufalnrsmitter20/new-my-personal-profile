"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface SplitTextAnimationProps {
  text: string;
  className: string;
  delay?: any;
  type: gsap.EaseString | gsap.EaseFunction | undefined;
  targetRef: React.MutableRefObject<HTMLDivElement | null>; // Menambahkan prop targetRef
}

const SplitTextAnimation: React.FC<SplitTextAnimationProps> = ({ text, className, delay, type, targetRef }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Jika elemen masuk ke dalam view port
          if (textRef.current) {
            const chars = textRef.current.querySelectorAll(".char");
            gsap.fromTo(
              chars,
              {
                stopOpacity: 0,
                opacity: 0,
                y: 20,
              },
              {
                opacity: 1,
                y: 0,
                stagger: 0.05,
                duration: 0.5,
                ease: type,
                animation: "linear",
                delay: delay,
              }
            );
          }
          observer.unobserve(entry.target); // Berhenti mengamati elemen setelah dijalankan sekali
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current); // Mulai mengamati elemen target
    }

    return () => {
      observer.disconnect(); // Bersihkan observer saat komponen di-unmount
    };
  }, [targetRef, delay, type]);

  // Split text into individual characters
  const splitText = text.split("").map((char, index) => (
    <span key={index} className="char">
      {char}
    </span>
  ));

  return (
    <span className={className} ref={textRef}>
      {splitText}
    </span>
  );
};

export default SplitTextAnimation;
