import Image from "next/image";
import React from "react";
import myProfile from "@/public/fofogweh.png";
import InitialAOSClient from "./utilities/InitialAOSClient";

export default function AboutMe() {
  return (
    <InitialAOSClient>
      <div id="about" className="h-full relative overflow-x-hidden">
        <Image width={100} unoptimized height={100} className="w-screen h-full object-cover absolute top-0 left-0 z-0" src="/img/bg1.jpg" alt="Background Image" />
        <main className="bg-primary-dark/80 pt-12 backdrop-blur-md shadow-md px-12 md:px-16 lg:px-24 xl:px-36 py-10 z-10">
          <h1 data-aos="fade-left" data-aos-offset="100" data-aos-duration="500" className="uppercase font-one-day font-normal text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] tracking-widest text-secondary-dark">
            ABOUT <span className="text-white">ME</span>
          </h1>
          <div className=" lg:flex lg:justify-between gap-x-10 py-20">
            <div className="ring-2 ring-primary-dark rounded-full h-72 w-full max-w-lg overflow-hidden relative">
              <div className="bg-primary-dark/20 w-full h-full absolute top-0 left-0"></div>
              <Image data-aos="fade-right" data-aos-duration="500" className="lg:mx-0 object-cover w-full h-full" src={myProfile} alt="Profiles" />
            </div>
            <p
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="200"
              className="xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] text-[16px] leading-loose tracking-wider mt-6 lg:mt-0 font-[400] content-center text-white"
            >
              <span className="text-secondary-dark">Fullstack Developer</span> with 1+ year experience in
              <span className="text-secondary-dark"> web application development</span>. Built a<span className="text-secondary-dark"> custom UI library</span> to boost productivity. Skilled in
              <span className="text-secondary-dark"> project management</span> and
              <span className="text-secondary-dark"> team leadership</span>. Proficient in
              <span className="text-secondary-dark"> Next.js</span> and
              <span className="text-secondary-dark"> Laravel</span>. Strong in
              <span className="text-secondary-dark"> client communication</span>, cross-team coordination, and
              <span className="text-secondary-dark"> strategic decision-making</span>. Familiar with
              <span className="text-secondary-dark"> GitHub Projects</span> and
              <span className="text-secondary-dark"> Notion</span>. Aiming to grow as an
              <span className="text-secondary-dark"> IT Project Manager</span>.
            </p>
          </div>
        </main>
      </div>
    </InitialAOSClient>
  );
}
