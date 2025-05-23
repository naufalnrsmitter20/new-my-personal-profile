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
import { D1, H1, H2, H3, H4, P } from "./utilities/Text";
import { ArrowDown } from "lucide-react";

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
      <main id="home" className="relative selection:bg-slate-300">
        <div className="w-full h-full absolute top-0 left-0 bg-black/50 z-10 lg:h-screen"></div>
        {/* <main className="relative lg:flex flex-wrap-reverse lg:place-items-center w-full h-full lg:h-screen justify-around overflow-hidden z-20">
          <div className="max-w-xl mx-12 lg:mx-0 mb-16 lg:mt-0">
            <div>
              <Image
                src={naufal}
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
                alt="my Photos"
                className="w-32 lg:hidden lg:mx-auto my-10 md:block lg:w-auto ring-4 border-2 border-white ring-white/40 rounded-lg animate-move-up-down duration-[2s]"
              />
            </div>
            <div ref={targetRef} className="mt-10 lg:text-left">
              <SplitTextAnimation targetRef={targetRef} type={"bounce.in"} delay={0} text="Hi There,  " className="text-white font-[500] text-[18px] md:text-[28px] lg:text-[32px] xl:text-[40px] tracking-wide text-start" />
              {"  "}
              <SplitTextAnimation targetRef={targetRef} type={"bounce.in"} delay={0.7} text="I'am" className="text-white font-[500] text-[18px] md:text-[28px] lg:text-[32px] xl:text-[40px] tracking-wide" />
              {"  "}
              <div className="uppercase font-one-day font-[400] tracking-[0.5em] text-secondary-dark text-start">
                <D1 data-aos-delay="1400" data-aos="fade-right" data-aos-duration="1200">
                  Naufal Nabil
                </D1>{" "}
                <D1 data-aos-duration="1200" data-aos-delay="2300" data-aos="fade-left" className="text-white">
                  Ramadhan
                </D1>
              </div>
              <h6 data-aos="fade-right" data-aos-duration="1200" data-aos-delay="3000" className="text-white tracking-wider font-[500] text-[16px] lg:text-[24px] xl:text-[28px] text-start">
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
            <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="500" data-aos-delay="2000">
              <SecondaryButton href="#about" classname="uppercase mt-8">
                Explore
              </SecondaryButton>
            </div>
          </div>
          <div className="relative z-20 place-items-center flex">
            <Image
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
              src={naufal}
              alt="my Photos"
              className="z-40 w-72 h-auto hidden lg:inline-block lg:mt-0 ring-4 border-2 border-white ring-white/40 rounded-lg animate-move-up-down duration-[2s] "
            />
          </div>
        </main> */}
        <main className="relative h-full lg:h-screen w-auto mx-auto overflow-hidden z-20 flex flex-col justify-center">
          <div className="py-10">
            <div className="rounded-full size-44 mx-auto overflow-hidden animate-move-up-down transition duration-[2s] border-white ring-white/40">
              <Image src={naufal} width={200} height={200} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" alt="my Photos" className="mx-auto md:block w-full h-full ring-4 border-2  object-cover" />
            </div>
            <div className="text-center mt-7" data-aos="fade-right" data-aos-delay="500" data-aos-duration="600">
              <D1 className="font-one-day uppercase tracking-widest mx-20 font-[400] from-secondary-dark">
                Lead with <span className="text-secondary-dark">purpose.</span> Build with <span className="text-secondary-dark">passion.</span> Inspire through <span className="text-secondary-dark">action.</span>
              </D1>{" "}
            </div>
            <div className="mx-auto w-fit" data-aos="fade-left" data-aos-duration="500" data-aos-delay="1000">
              <SecondaryButton href="#about" classname="uppercase mt-8 mb-8 flex items-center">
                <P>Explore</P>
                <ArrowDown size={20} className="text-secondary-dark group-hover:text-white ml-2 animate-move-up-down-2 duration-200" />
              </SecondaryButton>
            </div>
            <div data-aos="fade-up" data-aos-duration="500" className="overflow-hidden whitespace-nowrap bg-black text-white">
              <H2 className="inline-block animate-marquee space-x-6 mt-10" weight="semibold">
                {["Software Engineer", "Manager of MokletDev", "Full Stack Web Developer", "Entrepreneur", "Project Manager"].map((text, index) => (
                  <span key={index} className={`${index % 2 === 0 ? "text-white" : "text-secondary-dark"} font-[500]`}>
                    {text}
                    {index !== 4 && <span className="text-white ml-6"> | </span>}
                  </span>
                ))}
                <span className="ml-6 text-white">|</span>
                {["Software Engineer", "Manager of MokletDev", "Full Stack Web Developer", "Entrepreneur", "Project Manager"].map((text, index) => (
                  <span key={`second-${index}`} className={`${index % 2 === 0 ? "text-secondary-dark" : "text-white"} font-[500]`}>
                    {text}
                    {index !== 4 && <span className="text-white ml-6"> | </span>}
                  </span>
                ))}
              </H2>
            </div>
          </div>
        </main>
      </main>
    </InitialAOSClient>
  );
}
