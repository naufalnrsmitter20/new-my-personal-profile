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
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      href: "https://www.w3schools.com/html/",
    },
    {
      imageURL: cssImage,
      title: "CSS",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      href: "https://www.w3schools.com/css/",
    },
    {
      imageURL: jsImage,
      title: "JavaScript",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      href: "https://www.javascript.com/",
    },
    {
      imageURL: javaImage,
      title: "Java",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      href: "https://www.java.com/en/",
    },
    {
      imageURL: bootstrapImage,
      title: "Bootstrap",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      href: "https://getbootstrap.com/",
    },
    {
      imageURL: tailwindImage,
      title: "Tailwind CSS",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      href: "https://tailwindcss.com",
    },
    {
      imageURL: figmaImage,
      title: "Figma",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      href: "https://www.figma.com/",
    },
    {
      imageURL: wordpressImage,
      title: "Wordpress",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      href: "https://wordpress.org/",
    },
    {
      imageURL: tsImage,
      title: "TypeScript",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      href: "https://www.typescriptlang.org",
    },
    {
      imageURL: sassImage,
      title: "Sass",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      href: "https://sass-lang.com/",
    },
    // {
    //   imageURL: reactJsImage,
    //   title: "React JS",
    //   description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    //   href: "https://reactjs.org/",
    // },
    {
      imageURL: nextJsImage,
      title: "Next JS",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      href: "https://nextjs.org/",
    },
    {
      imageURL: mongoDBImage,
      title: "MongoDB",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      href: "https://www.mongodb.com/",
    },
    {
      imageURL: nodeJsImage,
      title: "Node JS",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      href: "https://nodejs.org/en/",
    },
    {
      imageURL: phpImage,
      title: "PHP",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      href: "https://www.php.net/",
    },
  ];
  return (
    <React.Fragment>
      <main id="techstack" className="bg-any-dark px-36 pt-14 pb-40 h-full relative">
        <h1 className="uppercase relative z-10 font-one-day text-[64px] font-normal tracking-widest text-white">
          TECH <span className="text-tertiary-dark">STACK</span>
        </h1>
        <div className="mt-[93px] grid grid-cols-4 max-w-fit gap-4 mx-auto">
          {techStacks.map((tech, i) => (
            <Card
              key={i}
              className="bg-transparent border-2 border-tertiary-dark hover:border-white w-[282px] transition-all duration-200"
              renderImage={() => <Image width={233} height={142} className="mx-auto mt-6 object-cover" src={tech.imageURL} alt="TechStack" />}
            >
              <h5 className="text-[24px] font-normal font-open-sans tracking-normal text-white">{tech.title}</h5>
              <p className="font-normal font-open-sans text-[16px] tracking-wide text-white">{tech.description}</p>
              <TertiaryButton classname="capitalize tracking-wider w-fit" href={tech.href} target="_blank">
                Documentation
              </TertiaryButton>
            </Card>
          ))}
        </div>
      </main>
    </React.Fragment>
  );
}
