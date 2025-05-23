"use client";

import React from "react";
import { Button, Navbar } from "flowbite-react";
import Image from "next/image";
import logo from "@/public/img/favicon.png";
import { SecondaryButton } from "./utilities/Button";
import InitialAOSClient from "./utilities/InitialAOSClient";
import { H2, H4, P } from "./utilities/Text";

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
    <InitialAOSClient>
      <div className="h-16">
        <Navbar className="fixed w-full bg-primary-dark/50 backdrop-blur-md block z-40 shadow shadow-white hover:shadow-secondary-dark transition-all duration-200">
          <Navbar.Brand href="#" className="flex place-items-center gap-x-2">
            <Image src={logo} alt="my logo" />
            <H4 weight="medium" className="text-white">
              Naufalnr
            </H4>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <SecondaryButton target="_blank" href={"https://wa.me/6282141341737"} classname="hidden lg:block">
              Contact Me
            </SecondaryButton>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            {linkComponent.map((link, i) => (
              <Navbar.Link key={i} href={link.href}>
                <P className="text-white hover:text-secondary-dark transition-all duration-200">{link.title}</P>
              </Navbar.Link>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </InitialAOSClient>
  );
}
