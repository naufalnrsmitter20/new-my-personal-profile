import GithubIcon from "@/public/svg/GithubIcon";
import InstagramIcon from "@/public/svg/InstagramIcon";
import LinkedinIcon from "@/public/svg/LinkedinIcon";
import TelegramIcon from "@/public/svg/TelegramIcon";
import TiktokIcon from "@/public/svg/TiktokIcon";
import WhatsAppIcon from "@/public/svg/WhatsAppIcon";
import React from "react";
import { SecondaryButton } from "./utilities/Button";
import Link from "next/link";
import Image from "next/image";
import naufal from "@/public/img/my-photos.png";
import DiscordIcon from "@/public/svg/DiscordIcon";

export default function Jumbotron() {
  return (
    <React.Fragment>
      <main id="home">
        <main className="flex place-items-center bg-primary-dark w-full h-screen justify-around ">
          <div className="max-w-xl -ml-24">
            <h5 className="text-white font-platypi font-semibold text-[40px] tracking-wide">
              Hi There! My <span className="text-secondary-dark">Name</span> is
            </h5>
            <h1 className="uppercase font-one-day font-normal text-[64px] tracking-widest text-white">
              Naufal Nabil <span className="text-secondary-dark">Ramadhan</span>
            </h1>
            <h6 className="text-white tracking-wider font-open-sans font-medium  text-[24px] ">
              Developer <span className="text-secondary-dark">&</span> Entrepreneur
            </h6>
            <div className="flex justify-start gap-x-3.5 mt-6">
              <InstagramIcon />
              <WhatsAppIcon />
              <GithubIcon />
              <LinkedinIcon />
              <DiscordIcon />
              <TelegramIcon />
              <TiktokIcon />
            </div>
            <SecondaryButton classname="uppercase font-open-sans text-[10px] tracking-body mt-8 px-2 py-1">Explore</SecondaryButton>
          </div>
          <div className="relative z-0 max-w-xl">
            <Image src={naufal} alt="my Photos" className="z-40" />
            <span className="w-[309.88px] h-[309.88px] bg-secondary-dark rounded-full absolute top-20 right-[116px] -z-10"></span>
            <span className="w-[392.78px] h-[392.78px] bg-white rounded-full absolute bottom-4 left-0 -z-20"></span>
            <span className="w-[154.54px] h-[154.54px] bg-tertiary-dark rounded-full absolute top-60 left-44 -z-10"></span>
          </div>
        </main>
      </main>
    </React.Fragment>
  );
}
