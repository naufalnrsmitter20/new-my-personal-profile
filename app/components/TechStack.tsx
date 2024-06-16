import React from "react";
import htmlImage from "@/public/img/techstack/html.png";
import cssImage from "@/public/img/techstack/css.png";
import jsImage from "@/public/img/techstack/javascript.png";
import javaImage from "@/public/img/techstack/java.png";
import bootstrapImage from "@/public/img/techstack/bootstrap.png";
import tailwindImage from "@/public/img/techstack/tailwind.png";
import figmaImage from "@/public/img/techstack/figma.png";
import wordpressImage from "@/public/img/techstack/wordpress.png";
import tsImage from "@/public/img/techstack/typescript.png";
import sassImage from "@/public/img/techstack/sass.png";
import reactJsImage from "@/public/img/techstack/react.png";
import nextJsImage from "@/public/img/techstack/nextjs.png";
import mongoDBImage from "@/public/img/techstack/meongodb.png";
import nodeJsImage from "@/public/img/techstack/nodejs.png";
import phpImage from "@/public/img/techstack/php.png";
import { Card } from "flowbite-react";
import Image from "next/image";
import { TertiaryButton } from "./utilities/Button";
import Link from "next/link";
import InitialAOSClient from "./utilities/InitialAOSClient";

interface tech {
  imageURL: any;
  title: string;
  description: string;
  href: string;
}

export default function TechStack() {
  const techStacks: tech[] = [
    {
      imageURL: htmlImage,
      title: "HTML",
      description: "",
      href: "https://www.w3schools.com/html/",
    },
    {
      imageURL: cssImage,
      title: "CSS",
      description: "",
      href: "https://www.w3schools.com/css/",
    },
    {
      imageURL: jsImage,
      title: "JavaScript",
      description: "",
      href: "https://www.javascript.com/",
    },
    {
      imageURL: javaImage,
      title: "Java",
      description: "",
      href: "https://www.java.com/en/",
    },
    {
      imageURL: bootstrapImage,
      title: "Bootstrap",
      description: "",
      href: "https://getbootstrap.com/",
    },
    {
      imageURL: tailwindImage,
      title: "Tailwind CSS",
      description: "",
      href: "https://tailwindcss.com",
    },
    {
      imageURL: figmaImage,
      title: "Figma",
      description: "",
      href: "https://www.figma.com/",
    },
    {
      imageURL: wordpressImage,
      title: "Wordpress",
      description: "",
      href: "https://wordpress.org/",
    },
    {
      imageURL: tsImage,
      title: "TypeScript",
      description: "",
      href: "https://www.typescriptlang.org",
    },
    {
      imageURL: sassImage,
      title: "Sass",
      description: "",
      href: "https://sass-lang.com/",
    },
    {
      imageURL: nextJsImage,
      title: "Next JS",
      description: "",
      href: "https://nextjs.org/",
    },
    {
      imageURL: mongoDBImage,
      title: "MongoDB",
      description: "",
      href: "https://www.mongodb.com/",
    },
    {
      imageURL: nodeJsImage,
      title: "Node JS",
      description: "",
      href: "https://nodejs.org/en/",
    },
    {
      imageURL: phpImage,
      title: "PHP",
      description: "",
      href: "https://www.php.net/",
    },
  ];
  return (
    <InitialAOSClient>
      <main id="techstack" className="bg-any-dark md:px-16 lg:px-24 xl:px-36 pt-14 pb-40 h-full relative">
        <h1 data-aos="fade-left" data-aos-offset="100" data-aos-duration="600" className="uppercase relative z-10 px-12 md:px-0 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-normal tracking-widest text-white">
          TECH <span className="text-tertiary-dark">STACK</span>
        </h1>
        <div className="mt-[93px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-fit gap-4 mx-auto">
          {techStacks.map((tech, i) => (
            <Link key={i} target="_blank" href={tech.href}>
              <Card
                data-aos="fade-up"
                data-aos-offset={100}
                data-aos-duration={1500}
                data-aos-delay={i * 100}
                className="bg-transparent border-2 border-tertiary-dark hover:border-white w-[300px] hover:ring-4 hover:ring-white/40 xl:w-[300px] transition-all duration-200"
                renderImage={() => <Image width={233} height={142} className="mx-auto mt-10 object-cover" src={tech.imageURL} alt="TechStack" />}
              ></Card>
            </Link>
          ))}
        </div>
      </main>
    </InitialAOSClient>
  );
}
