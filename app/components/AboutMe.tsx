import Image from "next/image";
import React from "react";
import myProfile from "@/public/img/my-profile.png";
import AccordionsMe from "./utilities/AccordionsMe";

export default function AboutMe() {
  return (
    <React.Fragment>
      <main id="about" className="bg-any-dark px-36 py-10 h-full relative overflow-hidden">
        <h1 className="uppercase font-one-day font-normal text-[64px] tracking-widest text-tertiary-dark">
          ABOUT <span className="text-white">ME</span>
        </h1>
        <div className="mt-[93px] flex justify-between pb-20">
          <Image className="z-20 object-cover ring-2 ring-white rounded-md" src={myProfile} alt="Profiles" />
          <AccordionsMe />
        </div>
        <div>
          <span className="w-[86px] h-[86px] bg-white rounded-full absolute top-16 left-[624px]"></span>
          <span className="w-[189px] h-[189px] bg-tertiary-dark rounded-full absolute bottom-32 z-0 left-20"></span>
          <span className="w-[219px] h-[219px] bg-white rounded-full absolute top-56 z-0 -right-24"></span>
          <span className="w-[110px] h-[110px] bg-tertiary-dark rounded-full absolute top-40 z-0 right-24"></span>
        </div>
      </main>
    </React.Fragment>
  );
}
