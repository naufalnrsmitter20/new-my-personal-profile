import React from "react";
import { Card, Carousel } from "flowbite-react";
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
      <main id="certificate" className="bg-primary-dark/5 px-12 md:px-16 lg:px-24 xl:px-36 pt-14 pb-40 h-full relative selection:bg-slate-300">
        <h1 data-aos="fade-left" data-aos-offset="100" data-aos-duration="600" className="uppercase relative z-10 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-normal tracking-widest text-secondary-dark">
          MY <span className="text-white">CERTIFICATE</span>
        </h1>
        <div className="h-full w-auto mx-auto my-[93px] relative">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-16 max-w-fit mx-auto">
            {certif.map((items, i) => (
              <div className="bg-tertiary-dark/30 border-2 rounded-lg cursor-pointer border-tertiary-dark ring-4 hover:border-white overflow-hidden ring-tertiary-dark/40 hover:ring-white/40 z-10 w-full h-72" key={i}>
                <Image src={items.imageURL} width={966} height={684} alt={items.title} className="group-hover:scale-90 w-full h-full object-cover transition-all duration-300 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </InitialAOSClient>
  );
}
