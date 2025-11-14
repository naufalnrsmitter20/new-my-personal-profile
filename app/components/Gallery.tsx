import React from "react";
import InitialAOSClient from "./utilities/InitialAOSClient";
import Image from "next/image";
import { H1, H4, P } from "./utilities/Text";

interface IGallery {
  imgUrl: string;
  title: string;
}

export default function Gallery() {
  const GalleryData: IGallery[] = [
    {
      imgUrl: "/img/gallery/experience2.jpg",
      title: "HTML Dasar",
    },
  ];
  return (
    <InitialAOSClient>
      <div id="gallery" className="h-full relative overflow-x-hidden">
        <Image width={100} unoptimized height={100} className="w-full h-full object-cover absolute rotate-180 top-0 left-0 z-0" src="/img/bg-iya.webp" alt="Background Image" />
        <main className="bg-primary-dark/80 backdrop-blur-md shadow-md px-12 md:px-16 lg:px-24 xl:px-36 pt-14 pb-40 h-full relative selection:bg-slate-300 ">
          <H1
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-duration="600"
            className="uppercase relative text-center z-10 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-normal tracking-widest text-white selection:bg-slate-900"
          >
            MY <span className="text-secondary-dark">GALLERY</span>
          </H1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto mt-[93px] selection:bg-slate-500">
            {GalleryData.map((items, index) => (
              <div className="bg-transparent border-2 rounded-lg cursor-pointer border-white ring-2 hover:ring-4 hover:border-white overflow-hidden ring-white/40 hover:ring-white/40 z-10 w-full" key={index}>
                <div className="w-full h-64 relative group">
                  <Image src={items.imgUrl} width={966} height={684} alt={items.title} className="w-full h-full object-cover transition-all duration-300" />
                  <div className="w-full h-full bg-primary-dark/20"></div>
                </div>
                <div className="py-4 px-6">
                  <P className="text-white text-center">{items.title}</P>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </InitialAOSClient>
  );
}
