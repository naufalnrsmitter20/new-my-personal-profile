"use client";

import React from "react";
import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import logo from "@/public/img/favicon.png";
import { SecondaryButton } from "./utilities/Button";

interface navLink {
  title: string;
  href: string;
}
export default function Navbars() {
  const linkComponent: navLink[] = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Project",
      href: "#project",
    },
    {
      title: "TechStack",
      href: "#techstack",
    },
    {
      title: "Certificate",
      href: "#certificate",
    },
    {
      title: "Comments",
      href: "#comments",
    },
    {
      title: "Services",
      href: "#services",
    },
  ];
  return (
    <React.Fragment>
      <Navbar className="fixed w-full bg-primary-dark block z-40 shadow shadow-white hover:shadow-secondary-dark transition-all duration-200">
        <Navbar.Brand href="#" className="flex place-items-center gap-x-2">
          <Image src={logo} alt="my logo" />
          <h2 className="font-platypi font-semibold text-[24px] tracking-wide text-secondary-dark">
            DevN <span className="text-white">Naufalnr</span>
          </h2>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <SecondaryButton target="_blank" href={"https://wa.me/6282141341737"} classname=" hidden lg:block">
            Contact Me
          </SecondaryButton>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {linkComponent.map((link, i) => (
            <Navbar.Link key={i} href={link.href}>
              <p className="font-open-sans font-medium text-[16px] leading-line-body text-white hover:text-secondary-dark transition-all duration-200">{link.title}</p>
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
