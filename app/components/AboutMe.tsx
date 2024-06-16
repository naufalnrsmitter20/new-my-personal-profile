import Image from "next/image";
import React, { useEffect } from "react";
import myProfile from "@/public/img/my-profile.png";
import AccordionsMe from "./utilities/AccordionsMe";
import InitialAOSClient from "./utilities/InitialAOSClient";

export default function AboutMe() {
  return (
    <InitialAOSClient>
      <main id="about" className="bg-any-dark px-12 md:px-16 lg:px-24 xl:px-36 py-10 h-full relative overflow-x-hidden">
        <h1 data-aos="fade-left" data-aos-offset="100" data-aos-duration="600" className="uppercase font-one-day font-normal text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] tracking-widest text-tertiary-dark">
          ABOUT <span className="text-white">ME</span>
        </h1>
        <div className="mt-[93px] lg:flex lg:justify-between pb-20">
          <Image data-aos="fade-right" data-offset="300" data-aos-duration="1400" className="mx-auto lg:mx-0 object-cover mb-10 ring-2 ring-white rounded-md" src={myProfile} alt="Profiles" />
          <AccordionsMe />
        </div>
      </main>
    </InitialAOSClient>
  );
}
