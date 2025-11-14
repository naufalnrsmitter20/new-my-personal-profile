import React from "react";
import Image from "next/image";
import InitialAOSClient from "./utilities/InitialAOSClient";
import { H1, P } from "./utilities/Text";
import { SecondaryButton } from "./utilities/Button";

interface data {
  imageURL: any;
  title: string;
}

export default function MyCertificate() {
  const certif: data[] = [
    {
      imageURL: "/img/certificate/fiksi2025.jpg",
      title: "Finalist FIKSI 2025",
    },
    {
      imageURL: "/img/certificate/hackerRank.png",
      title: "HackerRank - Problem Solving (Basic)",
    },
    {
      imageURL: "/img/certificate/nortisAI.png",
      title: "AI Upskilling Program with RSA",
    },
    {
      imageURL: "/img/certificate/sft.png",
      title: "Samsung Solve for Tommorow (SFT)",
    },
    {
      imageURL: "/img/certificate/MPK.jpg",
      title: "Majelis Perwakilan Kelas (MPK) - Komisi 2",
    },
    {
      imageURL: "/img/certificate/Naufal Nabil Ramadhan_page-0001.webp",
      title: "Finalist Web Design Invofest",
    },
    {
      imageURL: "/img/certificate/SKMBT_C28023080613030_page-0001.webp",
      title: "OSIS MATSANEWA - KETUA 1",
    },
    {
      imageURL: "/img/certificate/Skilvul-SkilBadge-Web Development Pemula - Special Challenge_page-0001.webp",
      title: "Basic Coding Course - Web Development",
    },
    {
      imageURL: "/img/certificate/SERTIFIKAT PENGHARGAAN (1)_page-0004.webp",
      title: "Top 10 Course National Web Development in Skilvul",
    },
  ];
  return (
    <InitialAOSClient>
      <div id="certificate" className="h-full relative overflow-x-hidden">
        <Image width={100} unoptimized height={100} className="w-full h-full object-cover absolute top-0 left-0 z-0" src="/img/bg-certificate.webp" alt="Background Image" />
        <main className="bg-primary-dark/70 backdrop-blur-md shadow-md px-12 md:px-16 lg:px-24 xl:px-36 pt-14 pb-40 h-full relative selection:bg-slate-300">
          <H1
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-duration="600"
            className="uppercase text-center relative z-10 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-normal tracking-widest text-secondary-dark"
          >
            MY <span className="text-white">CERTIFICATE</span>
          </H1>
          <div className="h-full w-auto mx-auto my-[93px] relative">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-16 max-w-fit mx-auto">
              {certif.map((items, i) => (
                <div className="bg-transparent border-2 rounded-lg cursor-pointer border-white ring-2 hover:ring-4 hover:border-white overflow-hidden ring-white/40 hover:ring-white/40 z-10 w-full h-72" key={i}>
                  <Image src={items.imageURL} width={966} height={684} alt={items.title} className="group-hover:scale-90 w-full h-full object-cover transition-all duration-300 rounded-md" />
                </div>
              ))}
            </div>
            <div className="w-full flex justify-center mt-6">
              <SecondaryButton target="_blank" href={"https://drive.google.com/drive/folders/1iZjr0zhXNKzHIS-5DLNEZLzFY4yNFe0R?usp=sharing"} classname="hidden lg:block">
                View More
              </SecondaryButton>
            </div>
          </div>
        </main>
      </div>
    </InitialAOSClient>
  );
}
