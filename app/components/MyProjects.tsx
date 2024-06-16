"use client";
import React, { useState } from "react";
import { FilteredButton } from "./utilities/Button";
import BootstrapPortfolio from "@/public/img/projects/bootstrap-portfolio.png";
import LansicareHealth from "@/public/img/projects/lansicare-health.png";
import AlbumKenangan from "@/public/img/projects/album-kenangan-matsanewa.png";
import TechnologyArticle from "@/public/img/projects/technology-article.png";
import Adiswisata from "@/public/img/projects/adiswisata.png";
import wastain from "@/public/img/projects/wastain.png";
import { Card } from "flowbite-react";
import Image from "next/image";
import MouseBackground from "./animation/MouseBackground";
import InitialAOSClient from "./utilities/InitialAOSClient";

interface projects {
  name: string;
  imageUrl: any;
  type: string;
  href: string;
}

export default function MyProjects() {
  const dataProject: projects[] = [
    {
      name: "Bootstrap Portfolio",
      imageUrl: BootstrapPortfolio,
      type: "Website",
      href: "https://xnaufallnr.vercel.app/",
    },
    {
      name: "LansiCare Health Web",
      imageUrl: LansicareHealth,
      type: "Website",
      href: "https://lansicare-health.vercel.app/",
    },
    {
      name: "Album Fyrtiokara",
      imageUrl: AlbumKenangan,
      type: "WordPress",
      href: "https://fyrtiokara.wordpress.com/",
    },
    {
      name: "Technology Article",
      imageUrl: TechnologyArticle,
      type: "Article",
      href: "https://artikelteknologidansosial.blogspot.com/2023/08/dampak-teknologi-terhadap-kehidupan.html",
    },
    {
      name: "Adiswisata",
      imageUrl: Adiswisata,
      type: "WordPress",
      href: "https://www.adiswisata.id",
    },
    {
      name: "Wastain | Waste Sustainable",
      imageUrl: wastain,
      type: "Website",
      href: "https://wastain.vercel.app/",
    },
  ];
  const [selected, setSelected] = useState("All");
  const handleCategory = (category: string) => {
    setSelected(category);
  };
  const filteredProjects = selected === "All" ? dataProject : dataProject.filter((projects) => projects.type === selected);

  return (
    <InitialAOSClient>
      {/* <MouseBackground /> */}
      <main id="project" className="bg-primary-dark/5 selection:bg-slate-900 px-12 md:px-16 lg:px-24 xl:px-36 pt-14 pb-40 h-full relative">
        <h1 data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000" className="uppercase relative font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-normal tracking-widest text-white">
          MY <span className="text-secondary-dark">PROJECTS</span>
        </h1>
        <div>
          <div className="mt-[93px]">
            <div className="flex-wrap flex justify-center gap-2 lg:gap-x-4">
              <div data-aos-duration="1500" data-aos-delay="500" data-aos="fade-right">
                <FilteredButton onClick={() => handleCategory("All")}>All</FilteredButton>
              </div>
              <div data-aos-duration="1500" data-aos-delay="500" data-aos="fade-up">
                <FilteredButton onClick={() => handleCategory("Website")}>Website</FilteredButton>
              </div>
              <div data-aos-duration="1500" data-aos-delay="500" data-aos="fade-down">
                <FilteredButton onClick={() => handleCategory("UI/UX Design")}>UI/UX Design</FilteredButton>
              </div>
              <div data-aos-duration="1500" data-aos-delay="500" data-aos="fade-up">
                <FilteredButton onClick={() => handleCategory("WordPress")}>WordPress</FilteredButton>
              </div>
              <div data-aos-duration="1500" data-aos-delay="500" data-aos="fade-left">
                <FilteredButton onClick={() => handleCategory("Article")}>Article</FilteredButton>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-16 max-w-fit mx-auto ">
              {filteredProjects.map((projects, i) => (
                <Card
                  key={i}
                  data-aos="fade-left"
                  data-aos-duration={2000}
                  data-aos-delay={i * 500}
                  className="bg-tertiary-dark/30 border-2 border-tertiary-dark ring-4 hover:border-secondary-dark ring-tertiary-dark/40 hover:ring-secondary-dark/40 hover:border-spacing-8 rounded-3xl z-10"
                  renderImage={() => <Image width={415} height={205} src={projects.imageUrl} className="object-cover rounded-3xl" alt="Project Image" />}
                >
                  <div className="flex-wrap flex justify-between">
                    <a href={projects.href} target="_blank">
                      <p className="font-bold hover:text-secondary-dark xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] tracking-wide font-lato group text-white">{projects.name}</p>
                    </a>
                    <p className="font-bold text-disable-slate xl:text-[16px] lg:text-[15px] md:text-[14px] sm:text-[13px] text-[12px] font-lato">{projects.type}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </InitialAOSClient>
  );
}
