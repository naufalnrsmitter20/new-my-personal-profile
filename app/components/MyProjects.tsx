"use client";
import React, { useState } from "react";
import { FilteredButton } from "./utilities/Button";
import BootstrapPortfolio from "@/public/img/projects/bootstrap-portfolio.png";
import LansicareHealth from "@/public/img/projects/lansicare-health.png";
import AlbumKenangan from "@/public/img/projects/album-kenangan-matsanewa.png";
import TechnologyArticle from "@/public/img/projects/technology-article.png";
import Adiswisata from "@/public/img/projects/adiswisata.png";
import { Card } from "flowbite-react";
import Image from "next/image";

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
      type: "Website Design",
      href: "https://xnaufallnr.vercel.app/",
    },
    {
      name: "LansiCare Health Web",
      imageUrl: LansicareHealth,
      type: "Website Design",
      href: "https://lansicare-health.vercel.app/",
    },
    {
      name: "Album Kenangan Fyrtiokara",
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
  ];
  const [selected, setSelected] = useState("All");
  const handleCategory = (category: string) => {
    setSelected(category);
  };
  const filteredProjects = selected === "All" ? dataProject : dataProject.filter((projects) => projects.type === selected);

  return (
    <React.Fragment>
      <main id="project" className="bg-primary-dark px-36 pt-14 pb-40 h-full relative">
        <div>
          <span className="w-[209px] h-[209px] bg-secondary-dark rounded-full absolute -top-12 -left-14"></span>
        </div>
        <h1 className="uppercase relative z-10 font-one-day text-[64px] font-normal tracking-widest text-white">
          MY <span className="text-secondary-dark">PROJECTS</span>
        </h1>
        <div>
          <div className="mt-[93px] ">
            <div className="flex justify-center gap-x-4">
              <FilteredButton onClick={() => handleCategory("All")}>All</FilteredButton>
              <FilteredButton onClick={() => handleCategory("Website Design")}>Web Design</FilteredButton>
              <FilteredButton onClick={() => handleCategory("UI/UX Design")}>UI/UX Design</FilteredButton>
              <FilteredButton onClick={() => handleCategory("WordPress")}>WordPress</FilteredButton>
              <FilteredButton onClick={() => handleCategory("Article")}>Article</FilteredButton>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-16 max-w-fit mx-auto ">
              {filteredProjects.map((projects, i) => (
                <Card key={i} className="bg-tertiary-dark/30 border-none rounded-2xl" renderImage={() => <Image width={415} height={205} src={projects.imageUrl} className="object-cover " alt="Project Image" />}>
                  <div className="flex justify-between">
                    <a href={projects.href} target="_blank">
                      <p className="font-bold hover:text-secondary-dark xtracking-wide font-lato text-white">{projects.name}</p>
                    </a>
                    <p className="font-bold text-disable-slate font-lato">{projects.type}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}