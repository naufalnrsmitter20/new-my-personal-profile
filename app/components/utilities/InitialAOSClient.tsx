"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function InitialAOSClient({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out-back",
      once: true,
      duration: 500,
    });
  });
  return <React.Fragment>{children}</React.Fragment>;
}
