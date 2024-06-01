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

  return (
    <React.Fragment>
      <main id="home">
        <main className="lg:flex flex flex-wrap-reverse  lg:place-items-center bg-primary-dark w-full h-screen justify-around overflow-hidden">
          <div className="max-w-xl mx-12 lg:mx-0 mb-16 lg:-mt-0">
            <div>
              <Image src={naufal} alt="my Photos" className="w-32 lg:hidden mx-auto my-10 md:block lg:w-auto ring-4 border-2 border-white ring-white/40 rounded-lg" />
            </div>
            <div className="mt-10">
              <h5 className="text-white font-platypi font-semibold text-[22px] md:text-[28] lg:text-[32px] xl:text-[40px] tracking-wide -z-0">
                Hi There! My <span className="text-secondary-dark">Name</span> is
              </h5>
              <h1 className="uppercase font-one-day font-normal text-[30px] md:text-[48px] lg:text-[56px] xl:text-[64px] tracking-widest text-white">
                Naufal Nabil <span className="text-secondary-dark">Ramadhan</span>
              </h1>
              <h6 className="text-white tracking-wider font-open-sans font-medium  text-[24px] ">
                Developer <span className="text-secondary-dark">&</span> Entrepreneur
              </h6>
            </div>
            <div className="lg:flex grid grid-cols-5 sm:grid-cols-6 gap-3 justify-start lg:gap-x-3.5 mt-6 md:grid-cols-7">
              {Icons.map((e, i) => (
                <Link
                  key={i}
                  target="_blank"
                  className="group mx-auto lg:mx-0 ring-secondary-dark/40 ring-2 hover:border-white focus:border-white outline-none border-2 active:border-white focus:ring-white focus:ring-4 flex place-items-center p-2 rounded-full border-secondary-dark transition-all duration-200"
                  href={e.URL}
                >
                  {e.element}
                </Link>
              ))}
            </div>
            <SecondaryButton href="#about" classname="uppercase font-open-sans text-[10px] max-w-40 tracking-body mt-8 px-2 py-1">
              Explore
            </SecondaryButton>
          </div>
          <div className="relative z-0 place-items-center flex">
            <Image src={naufal} alt="my Photos" className="z-40 w-32 hidden lg:inline-block lg:w-auto lg:mt-0 ring-4 border-2 border-white ring-white/40 rounded-lg" />
          </div>
        </main>
      </main>
    </React.Fragment>
  );
}
