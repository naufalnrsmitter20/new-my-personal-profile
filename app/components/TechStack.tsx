import React from "react";
import htmlImage from "@/public/img/techstack/Brand=html5, Style=Dark.svg";
import cssImage from "@/public/img/techstack/Brand=css, Style=Dark.svg";
import jsImage from "@/public/img/techstack/Brand=js, Style=Dark.svg";
import javaImage from "@/public/img/techstack/Brand=java, Style=Dark.svg";
import bootstrapImage from "@/public/img/techstack/Brand=bootstrap5, Style=Dark.svg";
import tailwindImage from "@/public/img/techstack/Brand=tailwind, Style=Dark.svg";
import figmaImage from "@/public/img/techstack/Brand=figma, Style=Dark.svg";
import wordpressImage from "@/public/img/techstack/Brand=wordpress, Style=Dark.svg";
import tsImage from "@/public/img/techstack/Brand=typescript, Style=Dark.svg";
import sassImage from "@/public/img/techstack/Brand=sass, Style=Dark.svg";
import reactJsImage from "@/public/img/techstack/Brand=reactjs, Style=Dark.svg";
import nextJsImage from "@/public/img/techstack/Brand=nextjs, Style=Dark.svg";
import mongoDBImage from "@/public/img/techstack/Brand=mongodb, Style=Dark.svg";
import nodeJsImage from "@/public/img/techstack/Brand=nodejs, Style=Dark.svg";
import phpImage from "@/public/img/techstack/Brand=php, Style=Dark.svg";
import jqueryImage from "@/public/img/techstack/Brand=jquery, Style=Dark.svg";
import viteImage from "@/public/img/techstack/Brand=vitejs, Style=Dark.svg";
import laravelImage from "@/public/img/techstack/Brand=laravel, Style=Dark.svg";
import analitycsImage from "@/public/img/techstack/Brand=analytics, Style=Dark.svg";
import materialUIImage from "@/public/img/techstack/Brand=material-ui, Style=Dark.svg";
import NPMImage from "@/public/img/techstack/Brand=npm, Style=Dark.svg";
import githubImage from "@/public/img/techstack/Brand=github, Style=Dark.svg";
import Image from "next/image";
import Link from "next/link";
import InitialAOSClient from "./utilities/InitialAOSClient";
import { P } from "./utilities/Text";

interface tech {
  imageURL: any;
  title: string;
  description: string;
  href: string;
}

export default function TechStack() {
  const techStacks1: tech[] = [
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
      title: "Next.JS",
      description: "",
      href: "https://nextjs.org/",
    },
    {
      imageURL: jqueryImage,
      title: "JQuery",
      description: "",
      href: "https://jquery.com/",
    },
    {
      imageURL: laravelImage,
      title: "Laravel",
      description: "",
      href: "https://laravel.com/",
    },
    {
      imageURL: viteImage,
      title: "Vite",
      description: "",
      href: "vite.dev",
    },
    {
      imageURL: analitycsImage,
      title: "Analytics",
      description: "",
      href: "https://ads.google.com/",
    },
    {
      imageURL: materialUIImage,
      title: "Material UI",
      description: "",
      href: "https://mui.com/",
    },
    {
      imageURL: reactJsImage,
      title: "ReactJs",
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
      imageURL: NPMImage,
      title: "NPM",
      description: "",
      href: "https://www.npmjs.com/",
    },
    {
      imageURL: githubImage,
      title: "Github",
      description: "",
      href: "https://github.com/",
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
  const techStacks2: tech[] = [
    {
      imageURL: "img/techstack/openai.svg",
      title: "OpenAI",
      description: "",
      href: "https://www.openai.com/",
    },
    {
      imageURL: "img/techstack/slack.svg",
      title: "Slack",
      description: "",
      href: "https://slack.com/",
    },
    {
      imageURL: "img/techstack/postgresql.svg",
      title: "PostgreSQL",
      description: "",
      href: "https://www.postgresql.org/",
    },
    {
      imageURL: "img/techstack/postman.svg",
      title: "Postman",
      description: "",
      href: "https://www.postman.com/",
    },
    {
      imageURL: "img/techstack/vscode.svg",
      title: "VSCode",
      description: "",
      href: "https://code.visualstudio.com/",
    },
    {
      imageURL: "img/techstack/netlify.svg",
      title: "Netlify",
      description: "",
      href: "https://www.netlify.com/",
    },
    {
      imageURL: "img/techstack/google.svg",
      title: "Google",
      description: "",
      href: "https://www.google.com/",
    },
    {
      imageURL: "img/techstack/notion.svg",
      title: "Notion",
      description: "",
      href: "https://www.notion.so/",
    },
    {
      imageURL: "img/techstack/prisma.svg",
      title: "Prisma",
      description: "",
      href: "https://www.prisma.io/",
    },
  ];
  return (
    <InitialAOSClient>
      <div id="techstack" className="h-full relative overflow-x-hidden">
        <Image width={100} unoptimized height={100} className="w-screen h-full object-cover absolute top-0 left-0 z-0" src="/img/bg-programming-2.webp" alt="Background Image" />
        <main className="bg-primary-dark/80 backdrop-blur-md shadow-md md:px-16 lg:px-24 xl:px-36 pt-14 pb-40 h-full relative">
          <h1 data-aos="fade-left" data-aos-offset="100" data-aos-duration="500" className="uppercase relative z-10 px-12 md:px-0 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-normal tracking-widest text-white">
            TECH <span className="text-secondary-dark">STACK</span>
          </h1>
          <div className="mt-[93px] flex flex-wrap max-w-full gap-4 mx-auto">
            {techStacks1.map((tech, i) => (
              <Link key={i} target="_blank" href={tech.href}>
                <div
                  data-aos="fade-left"
                  data-aos-offset={100}
                  data-aos-duration={1500}
                  data-aos-delay={i * 100}
                  className="bg-transparent rounded-lg border-2 flex justify-between items-center w-full px-8 py-2 border-white hover:border-secondary-dark hover:ring-2 hover:ring-secondary-dark/40 transition-all duration-200"
                >
                  <Image width={60} height={60} className="mx-auto object-cover]" src={tech.imageURL} alt="TechStack" />
                  <P weight="medium" className="text-lg text-white">
                    {tech.title}
                  </P>
                </div>
              </Link>
            ))}
            {techStacks2.map((tech, i) => (
              <Link key={i} target="_blank" href={tech.href}>
                <div
                  data-aos="fade-left"
                  data-aos-offset={100}
                  data-aos-duration={1500}
                  data-aos-delay={i * 100}
                  className="bg-transparent rounded-lg border-2 flex justify-between items-center w-full px-8 py-6 border-white hover:border-secondary-dark hover:ring-2 hover:ring-secondary-dark/40 transition-all duration-200"
                >
                  <Image width={30} height={30} className="mx-auto object-cover" src={tech.imageURL} alt="TechStack" />
                  <P weight="medium" className="text-lg text-white ml-3">
                    {tech.title}
                  </P>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </InitialAOSClient>
  );
}
