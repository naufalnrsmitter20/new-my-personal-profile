import Image from "next/image";
import React, { useEffect } from "react";
import myProfile from "@/public/fofogweh.png";
import InitialAOSClient from "./utilities/InitialAOSClient";

export default function AboutMe() {
  return (
    <InitialAOSClient>
      <main id="about" className="bg-any-dark px-12 md:px-16 lg:px-24 xl:px-36 py-10 h-full relative overflow-x-hidden">
        <h1 data-aos="fade-left" data-aos-offset="100" data-aos-duration="600" className="uppercase font-one-day font-normal text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] tracking-widest text-tertiary-dark">
          ABOUT <span className="text-white">ME</span>
        </h1>
        <div className="mt-[93px] lg:flex lg:justify-between gap-x-10 pb-20">
          <div className="w-full flex ">
            <Image data-aos="fade-right" data-aos-duration="1000" className="lg:mx-0 object-cover ring-2 content-center ring-white rounded-md size-80" src={myProfile} alt="Profiles" />
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className="bg-white w-4 h-auto content-center"></div>
          {/* <AccordionsMe /> */}
          <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className="xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] text-[16px] leading-loose tracking-wider mt-6 lg:mt-0 content-center">
            I started my journey and my education about programming in MTsN 1 Malang City. In there, i always make use my free times in the class for learn programming skills. I also follow some organization to hone my hardskills for
            mysellf especially leadership, teamwork, and public speaking. Now, i continued my education in SMK Telkom Malang. It{"'"}s here I continues my journey and education about programming in depth. And also, it{"'"}s here i
            interested what is bussiness and startups and how to become entrepreneurs which utilize programming skills. I{"'"}m just ordinary people who want to be successful in the world of programming and bussiness.
          </p>
        </div>
      </main>
    </InitialAOSClient>
  );
}
