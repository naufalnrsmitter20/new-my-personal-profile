"use client";
import GithubIcon from "@/public/svg/GithubIcon";
import InstagramIcon from "@/public/svg/InstagramIcon";
import LinkedinIcon from "@/public/svg/LinkedinIcon";
import TelegramIcon from "@/public/svg/TelegramIcon";
import TiktokIcon from "@/public/svg/TiktokIcon";
import WhatsAppIcon from "@/public/svg/WhatsAppIcon";
import React, { useEffect, useRef } from "react";
import { SecondaryButton } from "./utilities/Button";
import Link from "next/link";
import Image from "next/image";
import naufal from "@/public/img/my_profile.jpg";
import DiscordIcon from "@/public/svg/DiscordIcon";

import { ReactTyped } from "react-typed";
import SplitTextAnimation from "./animation/SplitText";
import InitialAOSClient from "./utilities/InitialAOSClient";

interface IIcons {
  element: JSX.Element;
  URL: string;
}

export default function Jumbotron() {
  const Icons: IIcons[] = [
    {
      element: <InstagramIcon />,
      URL: "https://www.instagram.com/naufalnr.exe/",
    },
    {
      element: <WhatsAppIcon />,
      URL: "https://api.whatsapp.com/send/?phone=6282141341737&text&type=phone_number&app_absent=0",
    },
    {
      element: <GithubIcon />,
      URL: "https://github.com/naufalnrsmitter20",
    },
    {
      element: <LinkedinIcon />,
      URL: "https://www.linkedin.com/in/naufal-nabil-ramadhan-275056286/",
    },
    {
      element: <DiscordIcon />,
      URL: "https://discordapp.com/users/naufalnr_tdv",
    },
    {
      element: <TelegramIcon />,
      URL: "https://t.me/naufalnnrexe",
    },
    {
      element: <TiktokIcon />,
      URL: "https://vm.tiktok.com/ZSFTtnC26/",
    },
  ];
  const targetRef = useRef(null);

  return (
    <InitialAOSClient>
      <main id="home" className="relative selection:bg-slate-900">
        <div className="w-full h-full absolute top-0 left-0 bg-black/50 z-10 lg:h-screen"></div>
        <main className="relative lg:flex flex-wrap-reverse lg:place-items-center w-full h-full lg:h-screen justify-around overflow-hidden z-20">
          <div className="max-w-xl mx-12 lg:mx-0 mb-16 lg:mt-0">
            <div>
              <Image
                src={naufal}
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                alt="my Photos"
                className="w-32 lg:hidden lg:mx-auto my-10 md:block lg:w-auto ring-4 border-2 border-white ring-white/40 rounded-lg animate-move-up-down duration-[2s]"
              />
            </div>
            <div ref={targetRef} className="mt-10 lg:text-left">
              {/* <div className="flex-grow flex gap-x-2"> */}
              <SplitTextAnimation targetRef={targetRef} type={"bounce.in"} delay={0} text="Hi There! My " className="text-white font-platypi font-semibold text-[18px] md:text-[28px] lg:text-[32px] xl:text-[40px] tracking-wide text-start" />
              {"  "}
              <SplitTextAnimation targetRef={targetRef} type={"bounce.in"} delay={0.7} text="Name " className="text-secondary-dark font-platypi font-semibold text-[18px] md:text-[28px] lg:text-[32px] xl:text-[40px] tracking-wide" />
              {"  "}
              <SplitTextAnimation targetRef={targetRef} type={"bounce.in"} delay={1.2} text="Is" className="text-white font-platypi font-semibold text-[18px] md:text-[28px] lg:text-[32px] xl:text-[40px] tracking-wide" />
              {/* </div> */}
              <h1 className="uppercase font-one-day font-normal text-[30px] md:text-[48px] lg:text-[56px] xl:text-[64px] tracking-widest text-white text-start">
                <p data-aos-delay="1400" data-aos="fade-right" data-aos-duration="1200">
                  Naufal Nabil
                </p>{" "}
                <p data-aos-duration="1200" data-aos-delay="2300" data-aos="fade-left" className="text-secondary-dark">
                  Ramadhan
                </p>
              </h1>
              <h6 data-aos="fade-right" data-aos-duration="1200" data-aos-delay="3000" className="text-white tracking-wider font-open-sans font-medium text-[16px] lg:text-[24px] xl:text-[28px] text-start">
                I{"'"}m a{" "}
                <span id="myTyped" className="text-secondary-dark">
                  <ReactTyped strings={["Software Engineer", "Manager of MokletDev", "Web Developer", "Entrepreneur", "Project Manager"]} typeSpeed={80} backDelay={1000} backSpeed={100} loop />
                </span>
              </h6>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-4 justify-start mt-4">
              {Icons.map((e, i) => (
                <Link
                  key={i}
                  target="_blank"
                  className="group lg:mx-0 ring-secondary-dark/40 ring-2 hover:border-white focus:border-white outline-none border-2 active:border-white focus:ring-white focus:ring-4 flex place-items-center p-1 lg:p-1.5 xl:p-2 rounded-full border-secondary-dark transition-all duration-200 "
                  href={e.URL}
                  data-aos="fade-left"
                  data-aos-duration="1500"
                  data-aos-delay={i * 400}
                >
                  {e.element}
                </Link>
              ))}
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000" data-aos-delay="2000">
              <SecondaryButton href="#about" classname="uppercase font-open-sans text-[10px] max-w-40 tracking-body mt-8 px-2 py-1">
                Explore
              </SecondaryButton>
            </div>
          </div>
          <div className="relative z-20 place-items-center flex">
            <Image
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              src={naufal}
              alt="my Photos"
              className="z-40 w-72 h-auto hidden lg:inline-block lg:mt-0 ring-4 border-2 border-white ring-white/40 rounded-lg animate-move-up-down duration-[2s] "
            />
          </div>
        </main>
      </main>
    </InitialAOSClient>
  );
}
