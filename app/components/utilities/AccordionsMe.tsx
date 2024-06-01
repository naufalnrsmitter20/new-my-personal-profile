"use client";
import React from "react";
import { Accordion } from "flowbite-react";

export default function AccordionsMe() {
  return (
    <main className="lg:ml-24 w-full lg:mr-16 ">
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title className="font-open-sans focus:ring-2 font-normal text-[24px] tracking-wider bg-transparent text-tertiary-dark py-6 hover:bg-transparent">My Personality</Accordion.Title>
          <Accordion.Content className="ring-1 ring-white">
            <p className="mb-2 text-white font-open-sans text-[18px] leading-line-body tracking-wide">
              Hello, my name is Naufal Nabil Ramadhan, i from Indonesia spesifically in East Java, Malang City. I am is one of the Programmer and Software Engineer which interest with Bussiness and Start-Ups. Therefore, programming is one
              of the skills that i make as my daily hobby. I will continue deep learn about programming for become an expert Software Engineer.
            </p>
            {/* <TertiaryButton classname="capitalize mt-4 mb-1">Learn More</TertiaryButton> */}
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="font-open-sans focus:ring-2 font-normal text-[24px] tracking-wider bg-transparent text-tertiary-dark py-6 hover:bg-transparent">School & Programming Roadmaps</Accordion.Title>
          <Accordion.Content className="ring-1 ring-white">
            <p className="mb-2 text-white font-open-sans text-[16px] leading-line-body tracking-wide">
              I started my journey and my education about programming in MTsN 1 Malang City. In there, i always make use my free times in the class for learn programming skills. I also follow some organization to hone my hardskills for
              mysellf especially leadership, teamwork, and public speaking. Now, i continued my education in SMK Telkom Malang. It{"'s"} here I continues my journey and education about programming in depth. And also, it{"'s"} here i
              interested what is bussiness and startups and how to become entrepreneurs which utilize programming skills. I{"'m"} just ordinary people who want to be successful in the world of programming and bussiness.
            </p>
            {/* <TertiaryButton classname="capitalize mt-4 mb-1">Learn More</TertiaryButton> */}
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="font-open-sans focus:ring-2 font-normal text-[24px] tracking-wider bg-transparent text-tertiary-dark py-6 hover:bg-transparent">Professional Experience</Accordion.Title>
          <Accordion.Content className="ring-1 ring-white">
            <p className="mb-2 text-white font-open-sans text-[16px] leading-line-body tracking-wide">
              I{"'"}m a programmer spesifically in web designer and web development. I started working on some projects in SMK Telkom Malang. Starting from Portfolio Website, Health website, CRUD, and many more. I also use github for
              collaborate with some another developer team. I usually use NextJs, TypeScript/ JavaScript and MongoDB for building my projects. So that, website that i created is dynamic sites. I also develop my skill with learn some
              programming langguage like PHP and Laravel.
            </p>
            {/* <TertiaryButton classname="capitalize mt-4 mb-1">Learn More</TertiaryButton> */}
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </main>
  );
}
