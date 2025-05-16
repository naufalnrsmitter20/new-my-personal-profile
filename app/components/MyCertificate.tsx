import React from "react";
import { Carousel } from "flowbite-react";
// Certificate
import skilvulHTML from "@/public/img/certificate/Skilvul-SkilBadge-HTML Dasar_page-0001.jpg";
import skilvulCSS from "@/public/img/certificate/Skilvul-SkilBadge-CSS Dasar_page-0001.jpg";
import skilvulJS from "@/public/img/certificate/Skilvul-SkilBadge-JavaScript Dasar_page-0001.jpg";
import skilvulWeb from "@/public/img/certificate/Skilvul-SkilBadge-Web Development Pemula - Special Challenge_page-0001.jpg";
import sertifSkilvul from "@/public/img/certificate/SERTIFIKAT PENGHARGAAN (1)_page-0002.jpg";
import top10Skilvul from "@/public/img/certificate/SERTIFIKAT PENGHARGAAN (1)_page-0004.jpg";
import bPlan1 from "@/public/img/certificate/Bussiness Plan - Naufal Nabil Ramadhan_page-0001.jpg";
import bionix from "@/public/img/certificate/SERTIFIKAT-BIONIX.jpg";
import telUCopyWriting from "@/public/img/certificate/Naufal Nabil Ramadhan TelU_page-0001.jpg";
import webDesign from "@/public/img/certificate/Naufal Nabil Ramadhan_page-0001.jpg";
import webinar1 from "@/public/img/certificate/Sertifikat Webinar -Naufal-Nabil-Ramadhan.jpg";
import OSISMts from "@/public/img/certificate/SKMBT_C28023080613030_page-0001.jpg";
import Image from "next/image";
import InitialAOSClient from "./utilities/InitialAOSClient";

interface data {
  imageURL: any;
  title: string;
}

export default function MyCertificate() {
  const certif: data[] = [
    {
      imageURL: skilvulHTML,
      title: "Basic HTML",
    },
    {
      imageURL: skilvulCSS,
      title: "Basic CSS",
    },
    {
      imageURL: skilvulJS,
      title: "Basic JavaScript",
    },
    {
      imageURL: skilvulWeb,
      title: "Basic Coding Course - Web Development",
    },
    {
      imageURL: sertifSkilvul,
      title: "Basic Coding Course - Training Web Development ",
    },
    {
      imageURL: top10Skilvul,
      title: "Top 10 Course National Web Development in Skilvul",
    },
    {
      imageURL: bPlan1,
      title: "Bussiness Plan 1",
    },
    {
      imageURL: telUCopyWriting,
      title: "Tel-U CopyWriting",
    },
    {
      imageURL: webDesign,
      title: "Web Design Invofest",
    },
    {
      imageURL: webinar1,
      title: "Webinar 1",
    },
    {
      imageURL: bionix,
      title: "Bionix",
    },
    {
      imageURL: OSISMts,
      title: "OSIS MATSANEWA - KETUA 1",
    },
  ];
  return (
    <InitialAOSClient>
      {/* <MouseBackground /> */}

      <main id="certificate" className="bg-primary-dark/5 px-12 md:px-16 lg:px-24 xl:px-36 pt-14 pb-40 h-full relative selection:bg-slate-300">
        <h1 data-aos="fade-left" data-aos-offset="100" data-aos-duration="600" className="uppercase relative z-10 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-normal tracking-widest text-secondary-dark">
          MY <span className="text-white">CERTIFICATE</span>
        </h1>
        <div className="sm:h-80 xl:h-[580px] w-auto md:h-80 lg:h-96 xl:w-[966px] h-56 2xl:h-[684px] mx-auto mt-[93px] relative">
          <Carousel className="max-w-sm sm:max-w-lg lg:max-w-xl group xl:max-w-6xl ring-white/40 border-2 border-white ring-2 hover:ring-8 transition-all duration-200 rounded-lg h-full" slideInterval={3000}>
            {certif.map((items, i) => (
              <div key={i}>
                <Image src={items.imageURL} width={966} height={684} alt={items.title} className="group-hover:scale-90 transition-all duration-300 rounded-md" />
              </div>
            ))}
          </Carousel>
        </div>
      </main>
    </InitialAOSClient>
  );
}
