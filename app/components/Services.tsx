"use client";
import UIUXDesign from "@/public/svg/UIUXDesign";
import WebDevelopment from "@/public/svg/WebDevelopment";
import WireframeProductFlow from "@/public/svg/WireframeProductFlow";
import React, { useRef } from "react";
import { SecondaryButton } from "./utilities/Button";
import InitialAOSClient from "./utilities/InitialAOSClient";
import { H1, H4, P } from "./utilities/Text";
import Image from "next/image";

interface MoreServices {
  titles: string;
  desc: string;
  Icons: React.ReactElement;
}

export default function Services() {
  const CompServices: MoreServices[] = [
    {
      titles: "Web Design",
      desc: "We provide high-quality, responsive, and customizable website designs for portfolios, company profiles, surveys, and more, combining visual appeal with smooth and functional user experience.",
      Icons: <WebDevelopment />,
    },
    {
      titles: "Web Development",
      desc: "We offer development services for both static and dynamic websites tailored to your needs including e-commerce platforms, student council elections, administrations web, event websites, and many more.",
      Icons: <WireframeProductFlow />,
    },
    {
      titles: "Project Management",
      desc: "We offer IT project management services to help ensure your projects run smoothly, on time, and within budget. From planning and coordination to progress tracking and risk handling, we deliver structured workflows and clear communication for successful results.",
      Icons: <UIUXDesign />,
    },
  ];
  const targetRef = useRef(null);

  return (
    <InitialAOSClient>
      <div id="services" className="h-full relative overflow-x-hidden">
        <Image width={100} unoptimized height={100} className="w-full h-full object-cover absolute rotate-180 top-0 left-0 z-0" src="/img/bg-iya.webp" alt="Background Image" />
        <main className="bg-primary-dark/80 backdrop-blur-md shadow-md px-12 md:px-16 lg:px-24 xl:px-36 pt-14 pb-40 h-full relative selection:bg-slate-300 ">
          <H1
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-duration="600"
            className="uppercase relative text-center z-10 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-normal tracking-widest text-secondary-dark selection:bg-slate-900"
          >
            PROVIDE <span className="text-white">SERVICES</span>
          </H1>
          <div ref={targetRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto mt-[93px] selection:bg-slate-500">
            {CompServices.map((items, index) => (
              <div
                data-aos-duration="1500"
                data-aos-offset="100"
                data-aos="fade-down"
                data-aos-delay={index * 100}
                key={index}
                className="border-2 border-white bg-primary-dark backdrop-blur-md rounded-md p-5 hover:ring-4 transition-all duration-200 hover:ring-white/40 hover:border-white"
              >
                <div className="border mix-blend-exclusion my-2 border-secondary-dark bg-any-dark w-[52px] h-[52px] rounded-md place-items-center flex mx-auto selection:bg-slate-600">{items.Icons}</div>
                <H4 weight="medium" className="text-center text-[24px] tracking-normal mb-2 mt-1 text-secondary-dark">
                  {items.titles}
                </H4>
                <P className="text-white font-normal text-[16px] leading-relaxed text-justify">{items.desc}</P>
              </div>
            ))}
          </div>
          <div className="mt-36">
            <H1 className="uppercase relative z-10 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] text-end font-normal tracking-widest text-secondary-dark">
              <span className="inline-block" data-aos="fade-down" data-aos-duration="500">
                INTERESTED
              </span>{" "}
              <span data-aos="fade-right" data-aos-delay="1000" data-aos-duration="500" className="text-white inline-block">
                WITH{" "}
                <span className="inline-block" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="500">
                  THE
                </span>
              </span>{" "}
              <span className="text-white inline-block" data-aos="fade-right" data-aos-delay="1500" data-aos-duration="500">
                SERVICES
              </span>
            </H1>
            <H1 className="uppercase relative z-10 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] text-end font-normal tracking-widest text-white">
              <span className="inline-block" data-aos="fade-left" data-aos-delay="2000" data-aos-duration="500">
                PROVIDED
              </span>{" "}
              <span className="text-white inline-block" data-aos="fade-left" data-aos-delay="2500" data-aos-duration="500">
                TO
              </span>{" "}
              <span className="text-secondary-dark inline-block" data-aos="fade-left" data-aos-delay="3000" data-aos-duration="500">
                YOU?
              </span>
            </H1>
            <div>
              <div className="flex justify-end mt-6" data-aos="fade-up" data-aos-delay="3000" data-aos-duration="500">
                <SecondaryButton href="https://wa.me/6282141341737/" target="_blank" classname="px-6">
                  CONTACT ME
                </SecondaryButton>
              </div>
            </div>
          </div>
        </main>
      </div>
    </InitialAOSClient>
  );
}
