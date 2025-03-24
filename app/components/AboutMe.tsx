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
        <div className=" lg:flex lg:justify-between gap-x-10 py-20">
          <div className="w-full">
            <Image data-aos="fade-right" data-aos-duration="1000" className="lg:mx-0 object-cover ring-2 ring-white rounded-md h-full w-72 max-w-lg" src={myProfile} alt="Profiles" />
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className="bg-white w-4 h-auto content-center"></div>
          {/* <AccordionsMe /> */}
          <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className="xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] text-[16px] leading-loose tracking-wider mt-6 lg:mt-0 content-center">
            Experienced and results-driven Fullstack Developer with over a year of expertise in leading web application development. Designed and developed a custom UI library to enhance developer productivity and code reusability. Skilled
            in project management, IT project management, and organizational leadership. Successfully led a development team, monitored project progress, and effectively communicated with clients to ensure seamless execution. Proficient in
            fullstack web development, with deep expertise in Next.js and Laravel. Adept at coordinating cross-functional teams, providing progress reports to stakeholders, and making strategic decisions to drive project success. Committed
            to delivering high-quality solutions and optimizing collaboration through tools like GitHub Projects and Notion. Eager to leverage strong leadership and technical skills to excel as an IT Project Manager.
          </p>
        </div>
      </main>
    </InitialAOSClient>
  );
}
