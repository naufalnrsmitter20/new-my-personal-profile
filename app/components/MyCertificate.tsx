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
      imageURL: OSISMts,
      title: "OSIS MATSANEWA - KETUA 1",
    },
  ];
  return (
    <React.Fragment>
      <main id="certificate" className="bg-primary-dark px-36 pt-14 pb-40 h-full relative">
        <h1 className="uppercase relative z-10 font-one-day text-[64px] font-normal tracking-widest text-secondary-dark">
          MY <span className="text-white">CERTIFICATE</span>
        </h1>
        <div className="sm:h-64 xl:h-80 w-[966px] h-56 2xl:h-[684px] mx-auto mt-[93px] relative">
          <Carousel slideInterval={3000}>
            {certif.map((items, i) => (
              <div key={i}>
                <Image src={items.imageURL} width={966} height={684} alt={items.title} />
              </div>
            ))}
          </Carousel>
        </div>
      </main>
    </React.Fragment>
  );
}
