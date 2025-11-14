import React from "react";
import InitialAOSClient from "./utilities/InitialAOSClient";
import Image from "next/image";
import { H1, H3, H4, H5, P } from "./utilities/Text";

interface IEducationData {
  title: string;
  Majority: string;
  start_date: string;
  end_date: string;
}

interface IWorkExperienceData {
  ImgUrl: string;
  company: string;
  position: IPositionData[];
}
interface IPositionData {
  position: string;
  start_date: string;
  end_date: string;
}

export default function MyJourney() {
  const EducationData: IEducationData[] = [
    {
      title: "SMK TELKOM MALANG",
      Majority: "Software Engineering",
      start_date: "2023",
      end_date: "now",
    },
    {
      title: "MTsN 1 Kota Malang",
      Majority: "State Islamic Junior High School",
      start_date: "2020",
      end_date: "2023",
    },
  ];

  const WorkExperienceData: IWorkExperienceData[] = [
    {
      company: "MokletDev",
      ImgUrl: "/img/journey/Mokletdev logo.jpeg",
      position: [
        {
          position: "Full Stack Developer",
          start_date: "Des 2023",
          end_date: "Agu 2024",
        },
        {
          position: "General Manager",
          start_date: "Agu 2024",
          end_date: "now",
        },
      ],
    },
    {
      company: "Grounded",
      ImgUrl: "/img/journey/grounded-logo.png",
      position: [
        {
          position: "Full Stack Developer",
          start_date: "Mai 2024",
          end_date: "now",
        },
      ],
    },
    {
      company: "MPK Moklet",
      ImgUrl: "/img/journey/logo mpk hd (1) 2.png",
      position: [
        {
          position: "KOMISI I - Coordinator of Technology and Information Division",
          start_date: "Okt 2023",
          end_date: "Okt 2024",
        },
        {
          position: "KOMISI II - Member of Legislative Body",
          start_date: "Okt 2024",
          end_date: "now",
        },
      ],
    },
  ];
  return (
    <InitialAOSClient>
      <div id="education" className="h-full relative overflow-x-hidden">
        {/* <Image width={100} unoptimized height={100} className="w-full h-full object-cover absolute rotate-180 top-0 left-0 z-0" src="/img/bg-iya.webp" alt="Background Image" /> */}
        <main className="bg-primary-dark/80 backdrop-blur-md shadow-md px-12 md:px-16 lg:px-24 xl:px-36 pt-14 pb-40 h-full relative selection:bg-slate-300 ">
          <H1
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-duration="600"
            className="uppercase relative text-start z-10 font-one-day text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-normal tracking-widest text-secondary-dark selection:bg-slate-900"
          >
            MY <span className="text-white">JOURNEY</span>
          </H1>
          <div className="max-w-full mt-[93px] grid grid-cols-1 lg:grid-cols-2 selection:bg-slate-500">
            <div className="w-full">
              <H4 className="mb-2 text-secondary-dark font-medium">Education</H4>
              <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {EducationData.map((item, index) => (
                  <li key={index} className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                      {item.start_date} - {item.end_date}
                    </time>
                    <H3 className="font-semibold text-white">{item.title}</H3>
                    <P className="mb-4 font-normal text-gray-400">{item.Majority}</P>
                  </li>
                ))}
              </ol>
            </div>
            <div className="w-full">
              <H4 className="mb-2 text-secondary-dark font-medium">Experience</H4>
              <ol className="relative border-s border-gray-200 ">
                {WorkExperienceData.map((item, index) => (
                  <li key={index} className="mb-10 ms-4 flex items-start justify-start">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <Image width={100} height={100} src={item.ImgUrl} alt={`${item.company} logo`} className="w-10 h-10 me-4" />
                    <div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                        {item.position[0].start_date} - {item.position[item.position.length - 1].end_date}
                      </time>
                      <H3 className="font-semibold text-white">{item.company}</H3>
                      <div className="max-w-sm bg-secondary-dark h-1 w-4 mt-1 mb-3" />
                      {item.position.map((pos, posIndex) => (
                        <div key={posIndex}>
                          <time className="text-gray-400 text-sm font-normal leading-none">
                            {pos.start_date} - {pos.end_date}
                          </time>
                          <H5 className="mb-4 font-semibold text-white">{pos.position}</H5>
                          <div className="max-w-sm bg-white h-[1px] mb-3 -mt-3 w-20" />
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </main>
      </div>
    </InitialAOSClient>
  );
}
