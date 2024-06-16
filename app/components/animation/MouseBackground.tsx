"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MouseBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = (clientY / innerHeight) * 100;

      gsap.to(videoRef.current, {
        backgroundPosition: `${xPercent}% ${yPercent}%`,
        duration: 0.5,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <video ref={videoRef} className="w-full h-[1200px] absolute top-0 left-0 object-cover" preload="none" autoPlay loop muted>
        <source src="/videos/myVideoBG.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default MouseBackground;
