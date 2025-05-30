"use client";
import React, { useState } from "react";
import { FilteredButton, PrimaryButton } from "./utilities/Button";
import LansicareHealth from "@/public/img/projects/lansicare-health.webp";
import TechnologyArticle from "@/public/img/projects/technology-article.webp";
import Adiswisata from "@/public/img/projects/adiswisata.webp";
import wastain from "@/public/img/projects/wastain.webp";
import pilketos from "@/public/img/projects/e-pilketos.webp";
import mokletorg from "@/public/img/projects/mokletorg.webp";
import telkomsociety from "@/public/img/projects/telkomsociety.webp";
import mitfest from "@/public/img/projects/mitfest.webp";
import groundedlab from "@/public/img/projects/groundedlab.webp";
import bebekPintar from "@/public/img/projects/bebekPintar.webp";
import mieKober from "@/public/img/projects/mieKober.webp";
import ViewInGithub from "@/public/img/projects/viewingithub.webp";
import Image from "next/image";
import InitialAOSClient from "./utilities/InitialAOSClient";
import { P } from "./utilities/Text";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

interface projects {
  name: string;
  imageUrl: any;
  type: string;
  href: string;
}

export default function MyProjects() {
  const dataProject: projects[] = [
    {
      name: "Mie Kober",
      imageUrl: mieKober,
      type: "Website",
      href: "https://kobermie.site/",
    },
    {
      name: "Bebek Pintar",
      imageUrl: bebekPintar,
      type: "Website",
      href: "https://www.bebekpintar.site/",
    },
    {
      name: "Telkom Society",
      imageUrl: telkomsociety,
      type: "Website",
      href: "https://telkom-society.smktelkom-mlg.sch.id/",
    },
    {
      name: "Moklet.org",
      imageUrl: mokletorg,
      type: "Website",
      href: "https://moklet.org/",
    },
    {
      name: "Mitfest Web",
      imageUrl: mitfest,
      type: "Website",
      href: "https://mitfest-dev.vercel.app",
    },
    {
      name: "E - Pilketos",
      imageUrl: pilketos,
      type: "Website",
      href: "https://e-pilketos-moklet.vercel.app/",
    },
    {
      name: "LansiCare Health Web",
      imageUrl: LansicareHealth,
      type: "Website",
      href: "https://lansicare-health.vercel.app/",
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

    {
      name: "GroundedLab Portfolio",
      imageUrl: groundedlab,
      type: "Website",
      href: "go.moklet.org/GroundedLab",
    },
    {
      name: "More? View In Github",
      imageUrl: ViewInGithub,
      type: "others",
      href: "https://github.com/naufalnrsmitter20",
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
      <main id="project" className="bg-primary-dark/5 selection:bg-slate-300 px-12 md:px-16 lg:px-24 xl:px-36 pt-14 pb-40 h-full relative">
        <h1 data-aos="fade-left" data-aos-offset="100" data-aos-duration="500" className="uppercase relative text-center font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-normal tracking-widest text-white">
          MY <span className="text-secondary-dark">PROJECTS</span>
        </h1>
        <div>
          <div className="mt-[93px]">
            <div className="flex-wrap flex justify-center gap-2 lg:gap-x-4">
              <div data-aos-duration="500" data-aos-delay="500" data-aos="fade-right">
                <PrimaryButton onClick={() => handleCategory("All")}>All</PrimaryButton>
              </div>
              <div data-aos-duration="500" data-aos-delay="500" data-aos="fade-up">
                <PrimaryButton onClick={() => handleCategory("Website")}>Website</PrimaryButton>
              </div>
              <div data-aos-duration="500" data-aos-delay="500" data-aos="fade-left">
                <PrimaryButton onClick={() => handleCategory("Article")}>Article</PrimaryButton>
              </div>
              <div data-aos-duration="500" data-aos-delay="500" data-aos="fade-left">
                <PrimaryButton onClick={() => handleCategory("others")}>Others</PrimaryButton>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-16 max-w-fit mx-auto">
              {filteredProjects.map((projects, i) => (
                <div
                  key={i}
                  onClick={() => window.open(projects.href)}
                  data-aos="fade-left"
                  data-aos-duration={1000}
                  data-aos-delay={i * 100}
                  className="group/card bg-primary-dark/30 border-2 rounded-lg relative cursor-pointer border-white ring-2 hover:ring-4 hover:border-white overflow-hidden ring-white/40 hover:ring-white/40 hover:border-spacing-8 z-10"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-primary-dark/20 group-hover/card:backdrop-blur-md group-hover/card:bg-primary-dark/30 duration-200 z-10"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 px-4 py-4 bg-primary-dark group/utils hover:ring-2 hover:ring-white/40 rounded-full group-hover/card:border-2">
                    <Link href={projects.href} target="_blank" onClick={(e) => e.stopPropagation()}>
                      <LinkIcon className="text-white w-6 h-6 group-hover/utils:text-white" />
                    </Link>
                  </div>
                  <Image loading="lazy" width={415} height={205} src={projects.imageUrl} className="object-cover w-full h-52" alt="Project Image" />
                  <div>
                    <div className="flex-wrap flex justify-between py-4 px-6">
                      <Link href={projects.href} target="_blank">
                        <P className="hover:text-secondary-dark font-[500] tracking-wide group text-white">{projects.name}</P>
                      </Link>
                      <P className="font-[600] text-disable-slate">{projects.type}</P>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </InitialAOSClient>
  );
}
