import UIUXDesign from "@/public/svg/UIUXDesign";
import WebDevelopment from "@/public/svg/WebDevelopment";
import WireframeProductFlow from "@/public/svg/WireframeProductFlow";
import React from "react";

interface MoreServices {
  titles: string;
  desc: string;
  Icons: React.ReactElement;
}

export default function Services() {
  const CompServices: MoreServices[] = [
    {
      titles: "Web Design",
      desc: "Menyediakan Layanan Pembuatan Desain website. Mulai dari Portfolio, Company Profile, Web Survey dan lain lain. Website yang kami buat dijamin berkualitas bagus, responsive, dan dinamis.",
      Icons: <WebDevelopment />,
    },
    {
      titles: "Wireframe & Product Flow",
      desc: "Menyediakan Layanan Desain sistem Aplikasi berbasis website dengan kelengkapan komponen seperti FlowChart, Database Schema & ERD, Struktur Manajemen user & admin, UX Design, sampai pada wireframe.",
      Icons: <WireframeProductFlow />,
    },
    {
      titles: "UI/UX Design",
      desc: "Menyediakan Layanan untuk desain UI/UX Aplikasi berbasis website mulai dari pembuatan struktur sistem, wireframe, style guide, mockup hingga prototype yang diinginkan.",
      Icons: <UIUXDesign />,
    },
  ];
  return (
    <React.Fragment>
      <main id="services" className="bg-primary-dark px-36 pt-14 pb-40 h-full relative">
        <h1 className="uppercase relative z-10 font-one-day text-[64px] font-normal tracking-widest text-secondary-dark">
          PROVIDE <span className="text-white">SERVICES</span>
        </h1>
        <div className="grid grid-cols-3 gap-4 mx-auto mt-[93px]">
          {CompServices.map((items, index) => (
            <div key={index} className="border-2 border-tertiary-dark bg-any-dark rounded-md p-5 hover:ring-4 transition-all duration-200 hover:ring-tertiary-dark/80">
              <div className="border mix-blend-exclusion my-2 border-secondary-dark bg-any-dark w-[52px] h-[52px] rounded-md place-items-center flex mx-auto">{items.Icons}</div>
              <h4 className="text-center font-open-sans font-normal text-[24px] tracking-normal mb-2 mt-1 text-secondary-dark">{items.titles}</h4>
              <p className="font-open-sans font-normal text-[16px] leading-relaxed text-center ">{items.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </React.Fragment>
  );
}
