"use client";
import React from "react";
import { Accordion } from "flowbite-react";
import { TertiaryButton } from "./Button";

export default function AccordionsMe() {
  return (
    <main className="ml-24 w-full mr-16 ">
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title className="font-open-sans focus:ring-2 font-normal text-[24px] tracking-wider bg-transparent text-white py-6 hover:bg-transparent">What is the difference between a UI and UX Designer?</Accordion.Title>
          <Accordion.Content className="ring-2 ring-white">
            <p className="mb-2 text-white font-open-sans text-[16px] leading-line-body">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum obcaecati
              perspiciatis repellendus quas ea placeat voluptates rerum fuga. Vitae quam excepturi ad sapiente officiis aperiam iste perspiciatis maiores voluptatem molestiae.
            </p>
            <TertiaryButton classname="capitalize mt-4 mb-1">Learn More</TertiaryButton>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="font-open-sans focus:ring-2 font-normal text-[24px] tracking-wider bg-transparent text-white py-6 hover:bg-transparent">What is the difference between a UI and UX Designer?</Accordion.Title>
          <Accordion.Content className="ring-2 ring-white">
            <p className="mb-2 text-white font-open-sans text-[16px] leading-line-body">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum obcaecati
              perspiciatis repellendus quas ea placeat voluptates rerum fuga. Vitae quam excepturi ad sapiente officiis aperiam iste perspiciatis maiores voluptatem molestiae.
            </p>
            <TertiaryButton classname="capitalize mt-4 mb-1">Learn More</TertiaryButton>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="font-open-sans focus:ring-2 font-normal text-[24px] tracking-wider bg-transparent text-white py-6 hover:bg-transparent">What is the difference between a UI and UX Designer?</Accordion.Title>
          <Accordion.Content className="ring-2 ring-white">
            <p className="mb-2 text-white font-open-sans text-[16px] leading-line-body">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum obcaecati
              perspiciatis repellendus quas ea placeat voluptates rerum fuga. Vitae quam excepturi ad sapiente officiis aperiam iste perspiciatis maiores voluptatem molestiae.
            </p>
            <TertiaryButton classname="capitalize mt-4 mb-1">Learn More</TertiaryButton>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </main>
  );
}
