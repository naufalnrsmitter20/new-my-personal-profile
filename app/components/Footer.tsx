import { Footer } from "flowbite-react";
import React from "react";
import logo from "@/public/img/DevNavPreneur.png";
import Image from "next/image";

interface Build {
  tools: string;
  href: string;
}
export default function Footers() {
  const builder: Build[] = [
    {
      tools: "Next.js",
      href: "https://nextjs.org",
    },
    {
      tools: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      tools: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      tools: "Flowbite React",
      href: "https://flowbite-react.com",
    },
    {
      tools: "Tw Elements",
      href: "https://tw-elements.com/",
    },
    {
      tools: "AOS",
      href: "https://michalsnik.github.io/aos/",
    },
  ];
  return (
    <React.Fragment>
      <Footer container className="relative bottom-0 bg-any-dark">
        <div className="w-full max-w-full px-28 mx-auto mt-5 mb-16">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Image src={logo} alt="Logo" />
            </div>
            <div className="grid grid-cols-2 sm:mt-4 gap-x-44">
              <div className="">
                <Footer.Title title="Build With" className="font-platypi text-[24px] font-medium capitalize text-white" />
                {builder.map((build, i) => (
                  <Footer.LinkGroup key={i} col>
                    <Footer.Link target="_blank" className="text-white font-open-sans font-medium text-[16px] leading-line-body py-1.5 hover:text-secondary-dark transition-all duration-200" href={build.href}>
                      {build.tools}
                    </Footer.Link>
                  </Footer.LinkGroup>
                ))}
              </div>
              <div>
                <Footer.Title title="Legal" className="font-platypi text-[24px] font-medium capitalize text-white" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#" className="text-white font-open-sans font-medium text-[16px] leading-line-body py-1.5 hover:text-secondary-dark transition-all duration-200">
                    Privacy Policy
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
        </div>
      </Footer>
      <div className="w-full relative z-10 bottom-0 mix-blend-exclusion text-start bg-any-dark px-4 py-6">
        <Footer.Copyright className="text-white w-full max-w-screen-xl text-start mx-auto" href="#" by="DevN Naufalnr" year={2024} />
      </div>
    </React.Fragment>
  );
}
