import UIUXDesign from "@/public/svg/UIUXDesign";
import WebDevelopment from "@/public/svg/WebDevelopment";
import WireframeProductFlow from "@/public/svg/WireframeProductFlow";
import React from "react";
import { SecondaryButton } from "./utilities/Button";

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
      <main id="services" className="bg-primary-dark px-12 md:px-16 lg:px-24 xl:px-36 pt-14 pb-40 h-full relative">
        <h1 className="uppercase relative z-10 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-normal tracking-widest text-secondary-dark">
          PROVIDE <span className="text-white">SERVICES</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto mt-[93px]">
          {CompServices.map((items, index) => (
            <div key={index} className="border-2 border-tertiary-dark bg-any-dark rounded-md p-5 hover:ring-4 transition-all duration-200 hover:ring-white/40 hover:border-white">
              <div className="border mix-blend-exclusion my-2 border-secondary-dark bg-any-dark w-[52px] h-[52px] rounded-md place-items-center flex mx-auto">{items.Icons}</div>
              <h4 className="text-center font-open-sans font-normal text-[24px] tracking-normal mb-2 mt-1 text-secondary-dark">{items.titles}</h4>
              <p className="font-open-sans font-normal text-[16px] leading-relaxed text-center ">{items.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-36">
          <h1 className="uppercase relative z-10 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] text-end font-normal tracking-widest text-secondary-dark">
            INTERESTED <span className="text-white">WITH THE</span> <span className="text-tertiary-dark">SERVICES</span>
          </h1>
          <h1 className="uppercase relative z-10 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] text-end font-normal tracking-widest text-tertiary-dark">
            PROVIDED <span className="text-white">TO</span> <span className="text-secondary-dark">YOU?</span>
          </h1>
          <div className="flex justify-end mt-6">
            <SecondaryButton href="https://wa.me/6282141341737/" target="_blank" classname="px-6">
              CONTACT ME
            </SecondaryButton>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
