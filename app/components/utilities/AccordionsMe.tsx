"use client";
import React, { useEffect, useRef } from "react";
import { Accordion } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";
import SplitTextAnimation from "../animation/SplitText";

export default function AccordionsMe() {
  useEffect(() => {
    AOS.init({ once: true });
  });
  const targetRef = useRef(null);

  return (
    <main ref={targetRef} data-aos="fade-left" data-offset="300" data-aos-duration="1400" className="lg:ml-24 w-full lg:mr-16 ">
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title className="font-open-sans focus:ring-2 font-normal xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[19px] text-[18px] tracking-wider bg-transparent text-tertiary-dark py-6 hover:bg-transparent">
            My Personality
          </Accordion.Title>
          <Accordion.Content className="ring-1 ring-white">
            <SplitTextAnimation
              className="mb-2 text-white font-open-sans xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] leading-line-body tracking-wide"
              delay={0}
              targetRef={targetRef}
              text="Hello, my name is Naufal Nabil Ramadhan, i from Indonesia spesifically in East Java, Malang City. I am is one of the Programmer and Software Engineer which interest with Bussiness and Start-Ups. Therefore, programming is one
              of the skills that i make as my daily hobby. I will continue deep learn about programming for become an expert Software Engineer."
              type={"circ.in"}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="font-open-sans focus:ring-2 font-normal xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[19px] text-[18px] tracking-wider bg-transparent text-tertiary-dark py-6 hover:bg-transparent">
            School & Programming Roadmaps
          </Accordion.Title>
          <Accordion.Content className="ring-1 ring-white">
            <SplitTextAnimation
              className="mb-2 text-white font-open-sans xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] leading-line-body tracking-wide"
              targetRef={targetRef}
              delay={0}
              text="I started my journey and my education about programming in MTsN 1 Malang City. In there, i always make use my free times in the class for learn programming skills. I also follow some organization to hone my hardskills for
              mysellf especially leadership, teamwork, and public speaking. Now, i continued my education in SMK Telkom Malang. It's here I continues my journey and education about programming in depth. And also, it's here i
              interested what is bussiness and startups and how to become entrepreneurs which utilize programming skills. I'm just ordinary people who want to be successful in the world of programming and bussiness."
              type={"circ.in"}
            />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="font-open-sans focus:ring-2 font-normal xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] tracking-wider bg-transparent text-tertiary-dark py-6 hover:bg-transparent">
            Professional Experience
          </Accordion.Title>
          <Accordion.Content className="ring-1 ring-white">
            <SplitTextAnimation
              className="mb-2 text-white font-open-sans xl:text-[18px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] leading-line-body tracking-wide"
              targetRef={targetRef}
              delay={0}
              text="I'm a programmer spesifically in web designer and web development. I started working on some projects in SMK Telkom Malang. Starting from Portfolio Website, Health website, CRUD, and many more. I also use github for
              collaborate with some another developer team. I usually use NextJs, TypeScript/ JavaScript and MongoDB for building my projects. So that, website that i created is dynamic sites. I also develop my skill with learn some
              programming langguage like PHP and Laravel."
              type={"circ.in"}
            />
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </main>
  );
}
